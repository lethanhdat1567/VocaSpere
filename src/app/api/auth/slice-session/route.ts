import authApiRequest from '@/HttpRequest/authRequest';
import { HttpError } from '@/lib/http';

export async function POST(req: Request) {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
        return Response.json(
            {
                message: 'refreshToken token not found',
            },
            {
                status: 400,
            },
        );
    }
    try {
        const result = await authApiRequest.sliceSessionFromNextServerToServer(refreshToken);
        const newExpiresAt = new Date((result.payload as any).data.expiresAt);

        return Response.json(result.payload, {
            status: 200,
            headers: {
                'Set-Cookie': `sessionToken=${(result.payload as any).data.accessToken}; Path=/; HttpOnly; Expires=${newExpiresAt}`,
            },
        });
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status,
            });
        } else {
            console.log(error);

            return Response.json(
                {
                    message: 'Loi khong xac dinh',
                },
                { status: 500 },
            );
        }
    }
}
