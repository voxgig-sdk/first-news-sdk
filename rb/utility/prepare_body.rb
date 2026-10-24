# FirstNews SDK utility: prepare_body
require_relative 'media'
module FirstNewsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FirstNewsUtilities.raw_body(ctx.reqdata) if FirstNewsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
