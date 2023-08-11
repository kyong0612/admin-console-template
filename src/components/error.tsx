'use client'

import { ApolloError } from '@apollo/client/core'
import { GraphQLError } from 'graphql'

type Props = {
  error: readonly GraphQLError[] | ApolloError
}

export const ErrorAlertComponent = ({ error }: Props) => {
  console.error(error)

  if (error instanceof ApolloError) {
    return (
      <>
        {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </>
    )
  }

  if (error instanceof Array) {
    return (
      <>
        {error.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </>
    )
  }
}
