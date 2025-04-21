import authApiRequest from '@/HttpRequest/authRequest';
import { HttpError } from '@/lib/http';

export async function POST(req: Request) {
    const { refreshToken, force } = await req.json();

    if (force) {
        return Response.json(
            {
                message: 'Buộc đăng xuất thành công',
            },
            {
                status: 200,
                headers: {
                    'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`,
                },
            },
        );
    }

    if (!refreshToken) {
        return Response.json(
            {
                message: 'Refresh token not found',
            },
            {
                status: 400,
            },
        );
    }

    try {
        const result = await authApiRequest.logoutFromNextServerToServer(refreshToken);

        return Response.json(result.payload, {
            status: 200,
            headers: {
                'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`,
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
