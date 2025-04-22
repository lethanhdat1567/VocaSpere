'use client';

import classNames from 'classnames/bind';
import styles from './ButtonSocial.module.scss';
import Image, { StaticImageData } from 'next/image';
import { app } from '@/firebase/config';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import authApiRequest from '@/HttpRequest/authRequest';
import { useAppContext } from '@/app/AppProvider';
import { useRouter } from 'next/navigation';
import { registerResType } from '@/schemaValidations/authe.schema';

const cx = classNames.bind(styles);
const auth = getAuth(app);

type Props = {
    data: {
        name: string;
        icon: StaticImageData;
    };
};

function ButtonSocial({ data }: Props) {
    const { setUser } = useAppContext();
    const router = useRouter();

    const handleLogin = async () => {
        let provider: any;

        if (data.name === 'Google') {
            provider = new GoogleAuthProvider();
        } else if (data.name === 'Facebook') {
            provider = new FacebookAuthProvider();
        }

        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const requestData = {
                googleId: data.name === 'Google' ? user.uid : undefined,
                facebookId: data.name === 'Facebook' ? user.uid : undefined,
                username: user.displayName || '',
                email: user.email || '',
                avatar: user.photoURL || '',
                password: null,
            };
            // Gửi thông tin lên BE để login hoặc create user
            const res = await authApiRequest.loginSocial(requestData);
            await authApiRequest.auth({ data: res.payload as registerResType });
            setUser((res.payload as any).data.account);
            router.push('/');
            console.log(res);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className={cx('wrap')} onClick={handleLogin}>
            <Image src={data.icon} alt="Google Logo" width={18} height={18} />
            <p className={cx('desc')}>Continue with {data.name}</p>
        </div>
    );
}

export default ButtonSocial;
