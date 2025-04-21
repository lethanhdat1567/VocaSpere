import classNames from 'classnames/bind';
import style from './Register.module.scss';
import { FormRegister } from '@/app/(routes)/(AuthLayout)/(auth)/register/_components/FormRegister/FormRegister';
import { socialAUthenData } from '@/lib/data';
import ButtonSocial from '@/components/ButtonSocialLogin/ButtonSocial';

const cx = classNames.bind(style);

function Register() {
    return (
        <div className={cx('wrap')}>
            <div>
                <h1 className={cx('title')}>Think it. Make it.</h1>
                <h2 className={cx('sub-title')}>Register to your Notion account</h2>
                <div className={cx('body')}>
                    <div className={cx('form')}>
                        <FormRegister />
                    </div>
                    <div className={cx('separate')}></div>
                    <div className={cx('social')}>
                        {socialAUthenData.map((item, index) => (
                            <ButtonSocial data={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
