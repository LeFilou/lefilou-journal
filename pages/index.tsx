import client from '../client';
import { GetStaticPropsResult } from 'next';
import { Post } from '../model/Post';
import PostSummaryList from '../components/modules/posts/PostSummaryList';

export interface IndexPageProps {
    posts: Post[];
}

export default function IndexPage({ posts }: IndexPageProps) {
    return <PostSummaryList posts={posts} />;
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<IndexPageProps>
> {
    const posts: Post[] = await client.fetch(
        `*[_type == "post"]{title, 'createdAt': _createdAt, summary, 'slug': slug.current}`,
        {},
    );
    return {
        props: {
            posts,
        },
    };
}