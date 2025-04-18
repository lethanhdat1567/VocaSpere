import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import ButtonSocial from '@/components/ButtonSocialLogin/ButtonSocial';
import { FormLogin } from '@/app/(routes)/(AuthLayout)/(auth)/login/_components/FormLogin/FormLogin';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div>
            <h1 className={cx('title')}>Think it. Make it.</h1>
            <h2 className={cx('sub-title')}>Log in to your Notion account</h2>
            <div className={cx('body')}>
                <div className={cx('social')}>
                    <ButtonSocial />
                    <ButtonSocial />
                </div>
                <div className={cx('separate')}></div>
                <div className={cx('form')}>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
}

export default Login;
