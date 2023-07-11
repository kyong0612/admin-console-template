import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/graphql/lib/client-provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <ApolloWrapper>{children}</ApolloWrapper>
      </div>
    </div>
  )
}
