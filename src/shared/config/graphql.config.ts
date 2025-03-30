import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { HttpStatus } from '@nestjs/common'
import { GraphQLError } from 'graphql'
import { join } from 'path'

export const graphQLConfig: ApolloDriverConfig = {
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  driver: ApolloDriver,
  introspection: true,
  playground: true,
  formatError: (error: GraphQLError) => {
    const originalError = error.extensions?.originalError || {}
    return {
      message: originalError['message'] || error.message,
      status_code:
        Number(originalError['statusCode']) ||
        Number(error.extensions?.code) ||
        HttpStatus.BAD_REQUEST,
      details: originalError['details'] || error.extensions?.details || null,
    }
  },
}
