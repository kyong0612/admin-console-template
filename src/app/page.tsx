import Link from 'next/link'
import { AllFilmsWithVariablesQueryDocument } from '@/graphql/generated/graphql'
import { apolloClient } from '@/graphql/lib/client'
import { pagesPath } from '@/utils/$path'

export default async function Page() {
  const { data, error } = await apolloClient.query({
    query: AllFilmsWithVariablesQueryDocument,
    variables: { first: 10 },
  })
  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data) {
    return <div>no data</div>
  }

  return (
    <div>
      <h1>Hello Frontend Template </h1>
      <div>
        <h2>Star Wars Films</h2>
        <ul>
          {data.allFilms?.films?.map((film, index) => (
            <li key={index}>
              <p>index: {index}</p>
              <p>id: {film?.id}</p>
              <p>title: {film?.title}</p>
              <p>openingCrawl: {film?.openingCrawl}</p>
              <p>created: {film?.created}</p>
              <br />
              {/* Can't use pathpida: https://nextjs.org/docs/messages/app-dir-dynamic-href */}
              <Link href={`/nested/${film?.id}`}>Go To Nested Page Link</Link>
              <br />
              <br />
            </li>
          ))}
        </ul>
        <Link href={pagesPath.nested.$url()}>Go To Nested Page Link</Link>
      </div>
    </div>
  )
}
