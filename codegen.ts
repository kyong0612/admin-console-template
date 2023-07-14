import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // TODO: get from env
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  documents: 'src/graphql/schema/*.gql',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      // see: https://zenn.dev/layerx/articles/028cb518cffd61#client-preset-%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E8%A8%AD%E5%AE%9A%E3%81%BE%E3%81%A8%E3%82%81
      plugins: [
        {
          // Custom Scalar の branded type 定義
          add: {
            content: `export type DateString = string & { readonly __brand: unique symbol }`,
          },
        },
      ],
      config: {
        strictScalars: true,
        useTypeImports: true,
        skipTypename: true,
        arrayInputCoercion: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
        scalars: {
          Date: 'DateString',
        },
        enumsAsTypes: true,
      },
    },
    'src/graphql/schema/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
}

export default config
