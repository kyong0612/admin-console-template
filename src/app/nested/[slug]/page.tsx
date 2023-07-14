import Link from 'next/link'
import { FetchFilmWithVariablesQueryDocument } from '@/graphql/generated/graphql'
import { apolloClient } from '@/graphql/lib/client'
import { pagesPath } from '@/utils/$path'

export default async function Page({ params }: { params: { slug: string } }) {
  // decode
  params.slug = decodeURIComponent(params.slug)

  const { data, loading, error } = await apolloClient.query({
    query: FetchFilmWithVariablesQueryDocument,
    variables: { id: params.slug },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>no data</div>
  }

  return (
    <>
      <h1>Hello, Nested Page!</h1>
      <p>title: {data.film?.title}</p>
      <p>openingCrawl: {data.film?.openingCrawl}</p>
      <p>created: {data.film?.created}</p>
      <br />
      <Link href={pagesPath.$url()}>Go To Nested Page Link</Link>
    </>
  )
}
