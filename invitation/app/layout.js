import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    metadataBase: 'https://yoo-jin-wedding-invitation.vercel.app',
    openGraph: {
        title: "YooWhan & Jinsol's Wedding",
        description: 'Generated  by create next app',
        url: 'https://yoo-jin-wedding-invitation.vercel.app',
    },
};

export const viewport = {
    width: 'device-width',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
