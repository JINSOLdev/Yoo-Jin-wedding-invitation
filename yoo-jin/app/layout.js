import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: "YooWhan & Jinsol's Wedding",
    description: 'Generated  by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <Head>
                <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
