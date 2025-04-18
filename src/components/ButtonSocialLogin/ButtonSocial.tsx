import classNames from 'classnames/bind';
import styles from './ButtonSocial.module.scss';
import Image from 'next/image';
import { imgs } from '../../../public/images';

const cx = classNames.bind(styles);

function ButtonSocial() {
    return (
        <div className={cx('wrap')}>
            <Image src={imgs.google} alt="Google Logo" width={18} height={18} />
            <p className={cx('desc')}>Continue with Google</p>
        </div>
    );
}

export default ButtonSocial;
