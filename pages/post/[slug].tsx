import { getClient } from '../../lib/sanity.server';
import { postBySlugQuery, postSlugsQuery } from '../../lib/queries';
import { PortableTextBlock } from '@sanity/types';
import { PortableText } from '@portabletext/react';
import { Post as PostSummary } from '@/model/Post';
import { RichTextComponents } from '@/components/widgets/RichComponents';

const Post = (props) => {
    const { title = 'Missing title', body } = props.post;
    return (
        <div>
            <h1 tw="text-4xl text-gray-800  font-bold">{title}</h1>
            <PortableText value={body} components={RichTextComponents} />
        </div>
    );
};

export async function getStaticPaths() {
    const paths = await getClient().fetch(postSlugsQuery);
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

type PostProps = PostSummary & PortableTextBlock;

export async function getStaticProps(context) {
    const { slug = '' } = context.params;
    const post: PostProps = await getClient().fetch(postBySlugQuery, { slug });
    return {
        props: {
            post,
        },
    };
}

export default Post;
