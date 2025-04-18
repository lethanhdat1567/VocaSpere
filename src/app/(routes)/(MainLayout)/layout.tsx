import LayoutState from '@/components/LayoutState/LayoutState';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <LayoutState>{children}</LayoutState>
        </div>
    );
}
