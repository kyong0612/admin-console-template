import '@/style/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import SimpleSidebar from '@/app/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'frontend-template',
  description: 'my frontend boilerplate  ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={inter.className}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <SimpleSidebar>{children}</SimpleSidebar>
        </Providers>
      </body>
    </html>
  )
}
