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
                <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
