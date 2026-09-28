import { Post } from '../../../model/Post';
import PostSummary from './PostSummary';

export interface PostSummaryListProps {
    posts: Post[];
}

const PostSummaryList = ({ posts }: PostSummaryListProps) =>
    posts.map((post) => (
        <PostSummary
            key={post.slug}
            title={post.title}
            publishedAt={post.publishedAt}
            summary={post.summary}
            slug={post.slug}
        />
    ));

export default PostSummaryList;
