'use client'

import { useQuery } from '@apollo/client'
import { AllFilmsWithVariablesQueryDocument } from '@/graphql/generated/graphql'

export default function Page() {
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
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}