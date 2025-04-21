import https from '@/lib/http';

const testRequest = {
    test: (sessionToken: string) =>
        https.get('/', {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            },
        }),
};

export default testRequest;
