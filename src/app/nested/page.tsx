import Link from 'next/link'
import { pagesPath } from '@/utils/$path'

export default function Page() {
  return (
    <>
      <h1>Hello, Nested Page!</h1>
      <Link href={pagesPath.$url()}>Go To Home Page</Link>
    </>
  )
}
