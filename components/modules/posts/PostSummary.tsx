import Link from 'next/link';

export interface PostSummaryProps {
    title: string;
    publishedAt: string;
    summary: string;
    slug: string;
}

const PostSummary = ({ title, publishedAt, summary, slug }: PostSummaryProps) => {
    const link = `post/${slug}`
    return (
        <div className="p-5">
            <h1 className="text-4xl text-gray-800 font-bold">
                <Link href={link}>{title}</Link>
            </h1>
            <span className="text-lg text-gray-400">{publishedAt}</span>
            <p className="text-xl text-gray-700 mt-4">{summary}</p>
        </div>
    );
};

export default PostSummary;
