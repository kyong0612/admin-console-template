import '@/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigateBar from './navbar'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'frontend-template',
  description: 'my frontend boilerplate',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={'right'}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <NavigateBar>{children}</NavigateBar>
        </Providers>
      </body>
    </html>
  )
}
