import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: '155p3ud3',
    dataset: 'production',
    useCdn: true
})