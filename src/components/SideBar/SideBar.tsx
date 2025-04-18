import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { ListEnd } from 'lucide-react';

const cx = classNames.bind(styles);

type Props = {
    isExpand: boolean;
    setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideBar({ isExpand, setIsExpand }: Props) {
    return (
        <div className={cx('wrap', { expand: isExpand })}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div>Profile</div>
                    <button className={cx('list-end-btn')} onClick={() => setIsExpand(false)}>
                        <ListEnd size={20} />
                    </button>
                </div>
                <div className={cx('body')}>Body</div>
            </div>
        </div>
    );
}

export default SideBar;
