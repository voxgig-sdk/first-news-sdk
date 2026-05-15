-- FirstNews SDK error

local FirstNewsError = {}
FirstNewsError.__index = FirstNewsError


function FirstNewsError.new(code, msg, ctx)
  local self = setmetatable({}, FirstNewsError)
  self.is_sdk_error = true
  self.sdk = "FirstNews"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FirstNewsError:error()
  return self.msg
end


function FirstNewsError:__tostring()
  return self.msg
end


return FirstNewsError
