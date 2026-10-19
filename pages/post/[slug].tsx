import { GetStaticPaths, GetStaticProps } from 'next';
import { getClient } from '../../lib/sanity.server';
import { postBySlugQuery, postSlugsQuery } from '../../lib/queries';
import { PortableTextBlock } from '@portabletext/types';
import {
    PortableText,
    PortableTextBlockComponent,
    PortableTextReactComponents,
} from '@portabletext/react';
import { Post } from '@/model/Post';
import { RichTextComponents } from '@/components/widgets/RichComponents';
import Seo from '@/components/widgets/seo/Seo';
import { formatDate } from '@/lib/date';

interface PostDetails extends Post {
    author?: string;
    mainImage?: string;
    body: PortableTextBlock[];
}

interface PostPageProps {
    post: PostDetails;
}

// The post title is the page's only <h1>, so headings from the body start at <h2>
const postComponents: Partial<PortableTextReactComponents> = {
    ...RichTextComponents,
    block: {
        ...(RichTextComponents.block as Record<
            string,
            PortableTextBlockComponent
        >),
        h1: ({ children }) => (
            <h2 className="mt-14 mb-4 text-3xl font-bold tracking-tight text-gray-900">
                {children}
            </h2>
        ),
    },
};

const PostPage = ({ post }: PostPageProps) => {
    const {
        title = 'Missing title',
        summary,
        slug,
        publishedAt,
        mainImage,
        body,
    } = post;
    return (
        <article className="break-words">
            <Seo
                title={title}
                description={summary}
                path={`/post/${slug}`}
                image={mainImage && `${mainImage}?w=1200&h=630&fit=crop`}
                publishedAt={publishedAt}
            />
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
                {title}
            </h1>
            <time
                dateTime={publishedAt}
                className="mt-4 mb-10 block border-b border-gray-200 pb-8 text-sm uppercase tracking-widest text-gray-400"
            >
                {formatDate(publishedAt)}
            </time>
            <PortableText value={body} components={postComponents} />
        </article>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs: string[] = await getClient().fetch(postSlugsQuery);
    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
    context,
) => {
    const slug = context.params?.slug ?? '';
    const post: PostDetails = await getClient().fetch(postBySlugQuery, {
        slug,
    });
    return { props: { post } };
};

export default PostPage;
