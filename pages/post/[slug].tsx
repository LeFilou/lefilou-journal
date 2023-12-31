import { getClient } from '../../lib/sanity.server';
import { postBySlugQuery, postSlugsQuery } from '../../lib/queries';
import { PortableTextBlock } from '@sanity/types';
import { Post as PostSummary } from '../../model/Post';
import { PortableText } from '@portabletext/react';
import { PortableTextReactComponents } from '@portabletext/react/src/types';

const Post = (props) => {
    const { title = 'Missing title', body } = props.post;
    return (
        <div>
            <h1 tw="text-4xl text-gray-800  font-bold">{title}</h1>
            <PortableText value={body} components={componentsRenderer} />
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

const componentsRenderer: Partial<PortableTextReactComponents> = {
    block: {
        h1: ({ children }) => (
            <h1 tw="text-4xl font-bold text-gray-800 mb-6">{children}</h1>
        ),
        normal: ({ children }) => <p tw="text-xl my-3">{children}</p>,
    },
};

export default Post;
