# FirstNews SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FirstNewsUtility.registrar = ->(u) {
  u.clean = FirstNewsUtilities::Clean
  u.done = FirstNewsUtilities::Done
  u.make_error = FirstNewsUtilities::MakeError
  u.feature_add = FirstNewsUtilities::FeatureAdd
  u.feature_hook = FirstNewsUtilities::FeatureHook
  u.feature_init = FirstNewsUtilities::FeatureInit
  u.fetcher = FirstNewsUtilities::Fetcher
  u.make_fetch_def = FirstNewsUtilities::MakeFetchDef
  u.make_context = FirstNewsUtilities::MakeContext
  u.make_options = FirstNewsUtilities::MakeOptions
  u.make_request = FirstNewsUtilities::MakeRequest
  u.make_response = FirstNewsUtilities::MakeResponse
  u.make_result = FirstNewsUtilities::MakeResult
  u.make_point = FirstNewsUtilities::MakePoint
  u.make_spec = FirstNewsUtilities::MakeSpec
  u.make_url = FirstNewsUtilities::MakeUrl
  u.param = FirstNewsUtilities::Param
  u.prepare_auth = FirstNewsUtilities::PrepareAuth
  u.prepare_body = FirstNewsUtilities::PrepareBody
  u.prepare_headers = FirstNewsUtilities::PrepareHeaders
  u.prepare_method = FirstNewsUtilities::PrepareMethod
  u.prepare_params = FirstNewsUtilities::PrepareParams
  u.prepare_path = FirstNewsUtilities::PreparePath
  u.prepare_query = FirstNewsUtilities::PrepareQuery
  u.result_basic = FirstNewsUtilities::ResultBasic
  u.result_body = FirstNewsUtilities::ResultBody
  u.result_headers = FirstNewsUtilities::ResultHeaders
  u.transform_request = FirstNewsUtilities::TransformRequest
  u.transform_response = FirstNewsUtilities::TransformResponse
}
