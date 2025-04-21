import https from '@/lib/http';
import { loginBodyType, registerBodyType, registerResType } from '@/schemaValidations/authe.schema';

const authApiRequest = {
    login: (body: loginBodyType) => https.post('/auth/login', body),
    register: (body: registerBodyType) => https.post('/auth/register', body),
    auth: (body: { data: registerResType }) => https.post('/api/auth', body, { baseUrl: '' }),
    logoutFromNextServerToServer: (refreshToken: string) => https.post('/auth/logout', { refreshToken }),
    logoutFromNextClientToNextServer: (body: { refreshToken?: string | null; force?: boolean }) =>
        https.post('/api/auth/logout', body, {
            baseUrl: '',
        }),
};

export default authApiRequest;
