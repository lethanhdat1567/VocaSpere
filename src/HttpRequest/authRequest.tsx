import https from '@/lib/http';
import { loginBodyType, loginSocialBodyType, registerBodyType, registerResType } from '@/schemaValidations/authe.schema';

const authApiRequest = {
    login: (body: loginBodyType) => https.post('/auth/login', body),
    loginSocial: (body: loginSocialBodyType) => https.post('/auth/login-social', body),
    register: (body: registerBodyType) => https.post('/auth/register', body),
    auth: (body: { data: registerResType }) => https.post('/api/auth', body, { baseUrl: '' }),
    logoutFromNextServerToServer: (refreshToken: string) => https.post('/auth/logout', { refreshToken }),
    logoutFromNextClientToNextServer: (body: { refreshToken?: string | null; force?: boolean }) =>
        https.post('/api/auth/logout', body, {
            baseUrl: '',
        }),
    sliceSessioFromNextClientToNextServer: (refreshToken: string) =>
        https.post('/api/auth/slice-session', { refreshToken }, { baseUrl: '' }),
    sliceSessionFromNextServerToServer: (refreshToken: string) => https.post('/auth/refresh-token', { refreshToken }),
};

export default authApiRequest;
