declare module 'opentracing-express-middleware' {
  import { Tracer } from 'opentracing'
  import { RequestHandler } from 'express'
  export type MiddlewareOptions = {
    tracer: Tracer
  }
  export default function middleware(options: MiddlewareOptions): RequestHandler
}
