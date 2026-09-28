export const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        // Same output on the build server and in the browser (no hydration mismatch)
        timeZone: 'UTC',
    });
