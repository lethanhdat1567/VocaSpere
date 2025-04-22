import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import Image from 'next/image';
import { imgs } from '../../../public/images';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('wrap')}>
            <Image width={26} height={26} alt="Logo" src={imgs.lightLogo} />
            <p className={cx('title')}>VocaSpere</p>
        </div>
    );
}

export default Logo;
