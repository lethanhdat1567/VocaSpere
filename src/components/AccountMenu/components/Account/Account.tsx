import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAppContext } from '@/app/AppProvider';
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const cx = classNames.bind(styles);

function Account() {
    const { user } = useAppContext();

    return (
        <DropdownMenuTrigger asChild>
            <Button variant={'ghost'}>
                <Avatar>
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>Người dùng không xác định</AvatarFallback>
                </Avatar>
                <p>{user?.username}</p>
            </Button>
        </DropdownMenuTrigger>
    );
}

export default Account;
