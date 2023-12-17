import { GetStaticPropsResult } from 'next';
import { Post } from '../model/Post';
import PostSummaryList from '../components/modules/posts/PostSummaryList';
import { getClient } from '../lib/sanity.server';
import { indexQuery } from '../lib/queries';

export interface IndexPageProps {
    posts: Post[];
}

export default function IndexPage({ posts }: IndexPageProps) {
    return <PostSummaryList posts={posts} />;
}

export async function getStaticProps(): Promise<
    GetStaticPropsResult<IndexPageProps>
> {
    const posts: Post[] = await getClient().fetch(indexQuery);
    return {
        props: {
            posts,
        },
    };
}