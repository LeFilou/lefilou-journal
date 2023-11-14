import { createClient } from '@sanity/client';

export default createClient({
    projectId: '155p3ud3',
    dataset: 'production',
    useCdn: true,
});
