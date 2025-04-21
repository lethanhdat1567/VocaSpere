'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AlignJustify } from 'lucide-react';
import { ButtonTheme } from '@/components/ButtonTheme/ButtonTheme';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ButtonLogout from '@/components/ButtonLogout/ButtonLogout';

const cx = classNames.bind(styles);

type Props = {
    isExpand: boolean;
    setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ isExpand, setIsExpand }: Props) {
    const sessionToken = localStorage.getItem('accessToken');

    return (
        <div className={cx('wrap')}>
            <div className="container px-4 h-full">
                <div className={cx('body')}>
                    <button onClick={() => setIsExpand(true)} className={cx('bar-btn', { active: !isExpand })}>
                        <AlignJustify />
                    </button>
                    <div className={cx('btn-theme')}>
                        <ButtonTheme />
                        {sessionToken ? (
                            <ButtonLogout />
                        ) : (
                            <>
                                <Link href={'/register'}>
                                    <Button variant="outline">Register</Button>
                                </Link>
                                <Link href={'/login'}>
                                    <Button>Login</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
