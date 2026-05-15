
import { Context } from './Context'


class FirstNewsError extends Error {

  isFirstNewsError = true

  sdk = 'FirstNews'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FirstNewsError
}

