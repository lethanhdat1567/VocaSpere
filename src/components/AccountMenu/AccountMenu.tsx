import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ButtonTheme } from '@/components/ButtonTheme/ButtonTheme';
import { User } from 'lucide-react';
import ButtonLogout from '@/components/ButtonLogout/ButtonLogout';
import Link from 'next/link';

const cx = classNames.bind(styles);

function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant={'ghost'}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>User Name</p>
                </Button>
            </DropdownMenuTrigger>
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
