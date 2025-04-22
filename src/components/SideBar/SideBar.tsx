import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { ListEnd } from 'lucide-react';
import Logo from '@/components/Logo/Logo';
import { sidebarData } from '@/lib/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

type Props = {
    isExpand: boolean;
    setIsExpand: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideBar({ isExpand, setIsExpand }: Props) {
    const pathname = usePathname();

    return (
        <div className={cx('wrap', { expand: isExpand })}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <Logo />
                    <button className={cx('list-end-btn')} onClick={() => setIsExpand(false)}>
                        <ListEnd size={20} />
                    </button>
                </div>
                <div className={cx('body')}>
                    <ul className={cx('list')}>
                        {sidebarData.headerSection.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li className={cx('list-section', { active: pathname == item.path })}>
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        ))}
                        <span className={cx('seperate')}></span>
                        {sidebarData.mainSection.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li className={cx('list-section')}>
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        ))}
                        <span className={cx('seperate')}></span>
                        {sidebarData.other.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <li className={cx('list-section')}>
                                    <item.icon size={18} />
                                    <span>{item.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
