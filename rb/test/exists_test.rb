# FirstNews SDK exists test

require "minitest/autorun"
require_relative "../FirstNews_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FirstNewsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
