'use client';

import { Button } from '@/components/ui/button';
import authApiRequest from '@/HttpRequest/authRequest';
import { handleErrorApi } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

function ButtonLogout() {
    const router = useRouter();
    const refreshToken = localStorage.getItem('refreshToken');

    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToNextServer({ refreshToken });
            router.push('/login');
            toast.success('Dang xuat thanh cong');
        } catch (error: any) {
            handleErrorApi({ error });
        }
    };

    return (
        <Button variant="outline" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default ButtonLogout;
