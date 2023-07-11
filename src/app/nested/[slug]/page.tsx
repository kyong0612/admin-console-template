import Link from 'next/link'
import { pagesPath } from '@/utils/$path'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>My slug: {params.slug}</div>
      <Link href={pagesPath.$url()}>Go To Nested Page Link</Link>
    </>
  )
}
