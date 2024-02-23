import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    openGraph: {
        title: "YooWhan & Jinsol's Wedding",
        description: 'Generated  by create next app',
        url: 'mobile-invitation-ivory.vercel.app/',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
