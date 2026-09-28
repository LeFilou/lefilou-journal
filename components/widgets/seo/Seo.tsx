import Head from 'next/head';
import { siteConfig } from '@/lib/site';

export interface SeoProps {
    title?: string;
    description?: string;
    path: string;
    image?: string;
    publishedAt?: string;
}

const Seo = ({
    title,
    description = siteConfig.description,
    path,
    image,
    publishedAt,
}: SeoProps) => {
    const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.name;
    const url = `${siteConfig.url}${path}`;
    const isArticle = Boolean(publishedAt);

    const jsonLd = isArticle && {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': title,
        'description': description,
        'datePublished': publishedAt,
        'url': url,
        'mainEntityOfPage': url,
        'author': { '@type': 'Person', 'name': siteConfig.author },
        ...(image && { image }),
    };

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:site_name" content={siteConfig.name} />
            <meta
                property="og:type"
                content={isArticle ? 'article' : 'website'}
            />
            <meta property="og:title" content={title ?? siteConfig.name} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}
            {isArticle && (
                <meta property="article:published_time" content={publishedAt} />
            )}
            <meta
                name="twitter:card"
                content={image ? 'summary_large_image' : 'summary'}
            />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                    }}
                />
            )}
        </Head>
    );
};

export default Seo;
