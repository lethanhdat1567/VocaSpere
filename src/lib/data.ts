import { Album, BookOpen, Brain, Headphones, Home, NotebookPen, Settings, Speech, UserSearch, Video } from 'lucide-react';
import { imgs } from '../../public/images';

export const socialAUthenData = [
    {
        name: 'Google',
        icon: imgs.google,
    },
    {
        name: 'Facebook',
        icon: imgs.facebook,
    },
];

export const sidebarData = {
    headerSection: [
        {
            name: 'Trang chủ',
            icon: Home,
            path: '/',
        },
        {
            name: 'Từ vựng',
            icon: Album,
            path: '/tuvung',
        },
        {
            name: 'Flashcart',
            icon: Brain,
            path: '/flashcard',
        },
        {
            name: 'Record',
            icon: Video,
            path: '/record',
        },
    ],
    mainSection: [
        {
            name: 'Reading',
            icon: BookOpen,
            path: '/reading',
        },
        {
            name: 'Speaking',
            icon: Speech,
            path: '/speaking',
        },
        {
            name: 'Listening',
            icon: Headphones,
            path: '/listening',
        },
        {
            name: 'Writting',
            icon: NotebookPen,
            path: '/writting',
        },
    ],
    other: [
        {
            name: 'Setting',
            icon: Settings,
            path: '/setting',
        },
        {
            name: 'Contact us',
            icon: UserSearch,
            path: '/contactus',
        },
    ],
};
