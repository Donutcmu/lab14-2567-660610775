import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MantineProvider } from "@mantine/core";
import { Title } from '@mantine/core';
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lab14",
  description: "Food Review Mockup UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
        
        
      </body>
    </html>
  );
}
