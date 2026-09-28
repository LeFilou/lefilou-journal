import Link from 'next/link';
import { formatDate } from '@/lib/date';

export interface PostSummaryProps {
    title: string;
    publishedAt: string;
    summary: string;
    slug: string;
}

const PostSummary = ({
    title,
    publishedAt,
    summary,
    slug,
}: PostSummaryProps) => (
    <article className="p-5">
        <h2 className="text-4xl text-gray-800 font-bold">
            <Link href={`/post/${slug}`}>{title}</Link>
        </h2>
        <time dateTime={publishedAt} className="text-lg text-gray-400">
            {formatDate(publishedAt)}
        </time>
        <p className="text-xl text-gray-700 mt-4">{summary}</p>
    </article>
);

export default PostSummary;
