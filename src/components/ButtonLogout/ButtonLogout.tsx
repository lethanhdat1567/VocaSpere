'use client';

import classNames from 'classnames/bind';
import styles from './ButtonLogout.module.scss';
import authApiRequest from '@/HttpRequest/authRequest';
import { handleErrorApi } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

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
        <div className={cx('list-item')} onClick={handleLogout}>
            <LogOut color="oklch(.704 .191 22.216)" />
            <p className={cx('list-item-text')}>Logout</p>
        </div>
    );
}

export default ButtonLogout;
