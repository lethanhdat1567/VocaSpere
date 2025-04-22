'use client';

import authApiRequest from '@/HttpRequest/authRequest';
import { useEffect, useState } from 'react';
import { differenceInHours } from 'date-fns';

function SliceSession() {
    const [refreshToken, setRefreshToken] = useState<string | null>();
    const [expiresAt, setExpiresAt] = useState<string | null>();

    useEffect(() => {
        const refreshToken = localStorage.getItem('refreshToken');
        const expiresAt = localStorage.getItem('expiresAt');
        setRefreshToken(refreshToken);
        setExpiresAt(expiresAt);
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {
            const now = new Date();
            if (differenceInHours(expiresAt as string, now) < 1) {
                const result = await authApiRequest.sliceSessioFromNextClientToNextServer(refreshToken as string);
                localStorage.setItem('expiresAt', (result.payload as any).data.expiresAt);
            }
        }, 1000 * 60 * 60);

        return () => clearInterval(interval);
    }, [expiresAt, refreshToken]);

    return null;
}

export default SliceSession;
