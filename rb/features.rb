# FirstNews SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FirstNewsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FirstNewsBaseFeature.new
    when "ratelimit"
      FirstNewsRatelimitFeature.new
    when "retry"
      FirstNewsRetryFeature.new
    when "test"
      FirstNewsTestFeature.new
    when "timeout"
      FirstNewsTimeoutFeature.new
    else
      FirstNewsBaseFeature.new
    end
  end
end
