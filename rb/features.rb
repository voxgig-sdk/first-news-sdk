# FirstNews SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FirstNewsFeatures
  def self.make_feature(name)
    case name
    when "base"
      FirstNewsBaseFeature.new
    when "test"
      FirstNewsTestFeature.new
    else
      FirstNewsBaseFeature.new
    end
  end
end
