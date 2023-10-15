'use client'
import { useEffect } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
    useEffect(() => {
        // Check if 'xerorat_user_id' exists in localStorage
        const userId = localStorage.getItem('xerorat_user_id');

        // If 'xerorat_user_id' doesn't exist, redirect to the login page
        if (!userId) {
            window.location.href = '/auth/login';
        }
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
