'use client';

import classNames from 'classnames/bind';
import styles from './LayoutState.module.scss';
import Header from '@/components/Header/Header';
import SideBar from '@/components/SideBar/SideBar';
import React, { useState } from 'react';

const cx = classNames.bind(styles);

function LayoutState({ children }: { children: React.ReactNode }) {
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className={cx('wrap')}>
            <SideBar isExpand={isExpand} setIsExpand={setIsExpand} />
            <div className={cx('body')}>
                <Header isExpand={isExpand} setIsExpand={setIsExpand} />
                <div className={cx('content', 'container px-4')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutState;
