# FirstNews SDK utility: make_context
require_relative '../core/context'
module FirstNewsUtilities
  MakeContext = ->(ctxmap, basectx) {
    FirstNewsContext.new(ctxmap, basectx)
  }
end
