import './styles/globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <Layout>
      <div lang="en">
        <body className={inter.className}>{children}</body>
      </div>
    </Layout>
  )
}
