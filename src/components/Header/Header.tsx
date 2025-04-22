'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SliceSession from '@/components/SliceSession/SliceSession';
import { useAppContext } from '@/app/AppProvider';
import AccountMenu from '@/components/AccountMenu/AccountMenu';

const cx = classNames.bind(styles);

type Props = {
    isExpand: boolean;
    setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ isExpand, setIsExpand }: Props) {
    const { user } = useAppContext();

    return (
        <div className={cx('wrap')}>
            <div className="container px-4 h-full">
                <div className={cx('body')}>
                    <button onClick={() => setIsExpand(true)} className={cx('bar-btn', { active: !isExpand })}>
                        <AlignJustify />
                    </button>
                    <div className={cx('btn-theme')}>
                        {user ? (
                            <AccountMenu />
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
                        <SliceSession />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
