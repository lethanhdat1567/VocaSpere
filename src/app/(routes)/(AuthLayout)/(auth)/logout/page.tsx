'use client';

import { useAppContext } from '@/app/AppProvider';
import authApiRequest from '@/HttpRequest/authRequest';
import { handleErrorApi } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Logout() {
    const router = useRouter();
    const pathname = usePathname();
    const { setUser } = useAppContext();
    const searchParams = useSearchParams();
    const accessToken = searchParams.get('sessionToken');
    const [sessionToken, setAccessToken] = useState<string | null>('');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        setAccessToken(accessToken);
    }, []);

    useEffect(() => {
        if (accessToken === sessionToken) {
            try {
                authApiRequest.logoutFromNextClientToNextServer({ force: true }).then(() => {
                    setUser(null);
                    router.push(`/login?redirectFrom=${pathname}`);
                });
            } catch (error: any) {
                handleErrorApi(error);
            }
        }
    }, [accessToken, router, sessionToken, pathname, setUser]);

    return <div>Page</div>;
}

export default Logout;
