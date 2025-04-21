'use client';

import authApiRequest from '@/HttpRequest/authRequest';
import { handleErrorApi } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function Logout() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const accessToken = searchParams.get('sessionToken');
    const localStorageSessionToken = localStorage.getItem('accessToken');

    useEffect(() => {
        console.log(accessToken);
        console.log(localStorageSessionToken);

        if (accessToken === localStorageSessionToken) {
            try {
                authApiRequest.logoutFromNextClientToNextServer({ force: true }).then(() => {
                    router.push(`/login?redirectFrom=${pathname}`);
                });
            } catch (error: any) {
                handleErrorApi(error);
            }
        }
    }, [accessToken, router, localStorageSessionToken, pathname]);

    return <div>Page</div>;
}

export default Logout;
