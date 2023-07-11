'use client'

import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AllFilmsWithVariablesQueryDocument } from '@/graphql/generated/graphql'
import { pagesPath } from '@/utils/$path'

export default function Page() {
  const router = useRouter()

  useQuery(AllFilmsWithVariablesQueryDocument, {
    variables: { first: 10 },
  })
  const { data, loading, error } = useQuery(AllFilmsWithVariablesQueryDocument, {
    variables: { first: 10 },
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
    <div>
      <h1>Hello Frontend Template </h1>
      <div>
        <h2>Star Wars Films</h2>
        <ul>
          {data.allFilms?.edges?.map((edge, index) => (
            <li key={index}>
              <p>index: {index}</p>
              <p>{JSON.stringify(edge)}</p>
              {/* Can't use pathpida: https://nextjs.org/docs/messages/app-dir-dynamic-href */}
              <Link href={`/nested/${index}`}>Go To Nested Page Link</Link>
              <br />
              <br />
            </li>
          ))}
        </ul>
        <Link href={pagesPath.nested.$url()}>Go To Nested Page Link</Link>
        <button type='button' onClick={() => router.push(pagesPath.nested.$url().pathname)}>
          Go To Nested Page Button
        </button>
      </div>
    </div>
  )
}
