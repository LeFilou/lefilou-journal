import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      title: 'Code with all options',
      name: 'codeField',
      type: 'code',
      options: {
        language: "java",
        languageAlternatives: [
          { title: "Java", value: "java" },
          { title: "Javascript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "Tsx", value: "tsx" },
          { title: "Kotlin", value: "kotlin" },
          { title: "Yaml", value: "yaml" },
        ],
        withFilename: true,
      },
    }),
  ],
})
