import { GetStaticPropsResult } from 'next';
import { Post } from '../model/Post';
import PostSummaryList from '../components/modules/posts/PostSummaryList';
import { getClient } from '../lib/sanity.server';
import { indexQuery } from '../lib/queries';
import ComingSoon from '../components/widgets/loader/ComingSoon';

export interface IndexPageProps {
    posts: Post[];
}

export default function IndexPage({ posts }: IndexPageProps) {
    return posts.length == 0 ? (
        <ComingSoon />
    ) : (
        <div tw="p-10 md:p-20">
            <PostSummaryList posts={posts} />
        </div>
    );
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
