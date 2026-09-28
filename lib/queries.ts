const postFields = `
  _id,
  title,
  summary,
  "publishedAt": coalesce(publishedAt, _createdAt),
  "slug": slug.current
`;
export const indexQuery = `
*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    ${postFields}
}
`;

export const aboutQuery = `
*[_type == "about"][0].about
`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}, "author": author->name, "mainImage": mainImage.asset->url, body
}
`;

export const sitemapQuery = `
*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  "updatedAt": _updatedAt
}
`;
