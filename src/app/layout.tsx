import '@/style/globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/graphql/lib/client-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'frontend-template',
  description: 'my frontend boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className={inter.className}>
      <body className='flex min-h-screen flex-col items-center justify-between p-24'>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  )
}
