export default class GraphQLRequestError extends Error {
    response?: {
      data: unknown
      status: number
      headers: string
    }
}