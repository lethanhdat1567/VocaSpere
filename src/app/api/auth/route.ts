export async function POST(req: Request) {
    const { data } = await req.json();

    const sessionToken = data.data.token.accessToken;
    if (!sessionToken) {
        return Response.json(
            {
                message: 'Session token not found',
            },
            {
                status: 400,
            },
        );
    }
    const expiresAt = new Date(Date.now() + data.data.token.accessTokenExpiresIn).toUTCString();

    return Response.json(
        {
            sessionToken,
        },
        {
            status: 200,
            headers: {
                'Set-Cookie': `sessionToken=${sessionToken}; Path=/; HttpOnly; Expires=${expiresAt}`,
            },
        },
    );
}
