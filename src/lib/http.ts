import envConfig from '@/config';
import { normalizePath } from '@/lib/utils';
import { registerResType } from '@/schemaValidations/authe.schema';
import { redirect } from 'next/navigation';

type CustomRequestInit = RequestInit & {
    baseUrl?: string | undefined;
};

export interface ResponseType<T = any> {
    message: string;
    status: number;
    data?: T;
    errors?: any;
}

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATE_ERROR_STATUS = 403;

type EntityErrorPayload = {
    message: string;
    errors: {
        field: string;
        message: string;
    }[];
};

export class HttpError extends Error {
    status: number;
    payload: {
        message: string;
        [key: string]: any;
    };

    constructor({ status, payload }: { status: number; payload: any }) {
        super('Http Error');
        this.status = status;
        this.payload = payload;
    }
}

export class EntityError extends HttpError {
    status: 422;
    payload: EntityErrorPayload;

    constructor({ status, payload }: { status: 422; payload: EntityErrorPayload }) {
        super({ status, payload });
        this.status = status;
        this.payload = payload;
    }
}

export const isClient = () => typeof window !== 'undefined';

const request = async <Response>(
    url: string | undefined,
    options: CustomRequestInit | undefined,
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
) => {
    const body = options?.body ? JSON.stringify(options.body) : null;
    let sessionToken: string | null = null;
    if (isClient()) {
        sessionToken = localStorage.getItem('accessToken');
    }
    const baseHeader = {
        'Content-type': 'Application/json',
        ...options?.headers,
        ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : {}),
    };

    const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl;

    const fullUrl = url?.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;

    const res = await fetch(fullUrl, {
        ...options,
        headers: {
            ...baseHeader,
            ...options?.headers,
        },
        body,
        method,
    });

    const payload: Response = await res.json();

    const data = {
        status: res.status,
        payload,
    };

    if (!res.ok) {
        console.log(res.status);
        if (res.status === ENTITY_ERROR_STATUS) {
            throw new EntityError(
                data as {
                    status: 422;
                    payload: EntityErrorPayload;
                },
            );
        } else if (res.status === AUTHENTICATE_ERROR_STATUS) {
            if (isClient()) {
                await fetch('/api/auth/logout', {
                    method: 'POST',
                    body: JSON.stringify({ force: true }),
                    headers: { ...baseHeader },
                });
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                location.href = '/login';
            } else {
                const sessionToken = (options?.headers as any).Authorization.split(' ')[1];
                console.log((options?.headers as any).Authorization.split(' ')[1]);

                redirect(`/logout?sessionToken=${sessionToken}`);
            }
        } else {
            console.log(data);
            throw new HttpError(data);
        }
    }
    if (isClient()) {
        if (['auth/login', 'auth/register'].some((item) => item === normalizePath(url as string))) {
            localStorage.setItem('accessToken', (payload as registerResType).data.token.accessToken);
            localStorage.setItem('refreshToken', (payload as registerResType).data.token.refreshToken);
        } else if ('api/auth/logout' === normalizePath(url as string)) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        }
    }

    return data;
};

const https = {
    get<Response>(url: string, options?: Omit<CustomRequestInit, 'body'> | undefined) {
        return request<Response>(url, options, 'GET');
    },
    post<Response>(url: string, body: any, options?: Omit<CustomRequestInit, 'body'> | undefined) {
        return request<Response>(url, { ...options, body }, 'POST');
    },
    patch<Response>(url: string, body: any, options?: Omit<CustomRequestInit, 'body'> | undefined) {
        return request<Response>(url, { ...options, body }, 'PATCH');
    },
    put<Response>(url: string, body: any, options?: Omit<CustomRequestInit, 'body'> | undefined) {
        return request<Response>(url, { ...options, body }, 'PUT');
    },
    delete(url: string, body: any, options?: Omit<CustomRequestInit, 'body'> | undefined) {
        return request<Response>(url, { ...options, body }, 'DELETE');
    },
};

export default https;
