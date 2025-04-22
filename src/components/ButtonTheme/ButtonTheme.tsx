'use client';

import classNames from 'classnames/bind';
import styles from './ButtonTheme.module.scss';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const cx = classNames.bind(styles);

export function ButtonTheme() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={cx('wrap')} onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
        </div>
    );
}
