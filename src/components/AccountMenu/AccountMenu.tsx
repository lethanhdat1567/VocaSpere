import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ButtonTheme } from '@/components/ButtonTheme/ButtonTheme';
import { User } from 'lucide-react';
import ButtonLogout from '@/components/ButtonLogout/ButtonLogout';
import Link from 'next/link';
import Account from '@/components/AccountMenu/components/Account/Account';

const cx = classNames.bind(styles);

function AccountMenu() {
    return (
        <DropdownMenu>
            <Account />
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={'/profile'} className={cx('list-item')}>
                        <User />
                        <p className={cx('list-item-text')}>Profile</p>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ButtonTheme />
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    <ButtonLogout />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default AccountMenu;
