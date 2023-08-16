'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/navbar';
import { Plot } from '@/components/selectplot';
import React, { Suspense, useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState: Plot = { plotName: '', plotNumber: 0 };
  const [localPlot, setLocalPlot] = useState(initialState);

  const [userInfo, setUserInfo] = useState<any>();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{userInfo ? <NavBar /> : <p></p>}</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
