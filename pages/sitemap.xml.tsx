import { GetServerSideProps } from 'next';
import { getClient } from '../lib/sanity.server';
import { sitemapQuery } from '../lib/queries';
import { siteConfig } from '@/lib/site';

interface SitemapPost {
    slug: string;
    updatedAt: string;
}

const escapeXml = (value: string) =>
    value.replace(/[<>&'"]/g, (char) => `&#${char.charCodeAt(0)};`);

const urlEntry = (path: string, lastModified?: string) => `  <url>
    <loc>${escapeXml(`${siteConfig.url}${path}`)}</loc>${
        lastModified ? `\n    <lastmod>${lastModified}</lastmod>` : ''
    }
  </url>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const posts: SitemapPost[] = await getClient().fetch(sitemapQuery);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[
    urlEntry('/'),
    urlEntry('/about'),
    ...posts.map((post) => urlEntry(`/post/${post.slug}`, post.updatedAt)),
].join('\n')}
</urlset>
`;

    res.setHeader('Content-Type', 'application/xml');
    // Cached on Vercel's CDN; each deploy (e.g. triggered by the Sanity webhook) starts fresh
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=3600, stale-while-revalidate=86400',
    );
    res.write(sitemap);
    res.end();

    return { props: {} };
};

const Sitemap = () => null;

export default Sitemap;
