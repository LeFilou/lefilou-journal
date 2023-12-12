import { Post } from '../../../model/Post';
import PostSummary from './PostSummary';

export interface PostSummaryListProps {
    posts: Post[];
}

const PostSummaryList = ({ posts }: PostSummaryListProps) => {
    return posts.map((post, index) => {
        const date = formatDate(post.createdAt);
        return (
            <PostSummary
                title={post.title}
                publishedAt={date}
                summary={post.summary}
                key={index}
                slug={post.slug}
            />
        );
    });
};

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
};

export default PostSummaryList;
