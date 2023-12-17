import { getClient } from '../../lib/sanity.server';
import { postBySlugQuery, postSlugsQuery } from '../../lib/queries';

const Post = (props) => {
    const { title = 'Missing title', author = 'Missing author' } = props.post;
    return (
        <article>
            <h1>{title}</h1>
            <span>By {author}</span>
        </article>
    );
};

export async function getStaticPaths() {
    const paths = await getClient().fetch(postSlugsQuery);
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { slug = '' } = context.params;
    const post = await getClient().fetch(postBySlugQuery,
        { slug },
    );
    return {
        props: {
            post,
        },
    };
}

export default Post;
