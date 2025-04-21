import classNames from 'classnames/bind';
import styles from './ButtonSocial.module.scss';
import Image, { StaticImageData } from 'next/image';

const cx = classNames.bind(styles);

type Props = {
    data: {
        name: string;
        icon: StaticImageData;
    };
};

function ButtonSocial({ data }: Props) {
    return (
        <div className={cx('wrap')}>
            <Image src={data.icon} alt="Google Logo" width={18} height={18} />
            <p className={cx('desc')}>Continue with {data.name}</p>
        </div>
    );
}

export default ButtonSocial;
