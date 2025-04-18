export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="flex items-center justify-center w-full h-dvh">{children}</div>;
}
