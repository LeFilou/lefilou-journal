export const sanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2025-02-19',
    useCdn:
        typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
};
