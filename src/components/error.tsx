'use client'

import { ApolloError } from '@apollo/client/core'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { GraphQLError } from 'graphql'

type Props = {
  error: readonly GraphQLError[] | ApolloError
}

export const ErrorAlertComponent = ({ error }: Props) => {
  console.error(error)

  if (error instanceof ApolloError) {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>error.message</AlertTitle>
        <AlertDescription>
          {error.graphQLErrors.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
        </AlertDescription>
      </Alert>
    )
  }

  if (error instanceof Array) {
    return (
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>エラーが発生しました</AlertTitle>
        <AlertDescription>
          {error.map(({ message }, i) => (
            <span key={i}>{message}</span>
          ))}
        </AlertDescription>
      </Alert>
    )
  }
}
