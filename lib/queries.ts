const postFields = `
  _id,
  title,
  summary,
  "createdAt": _createdAt,
  "slug": slug.current
`;
export const indexQuery = `
*[_type == "post"] {
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
  ${postFields}, "author": author->name, body
}
`;
