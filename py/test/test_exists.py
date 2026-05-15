# ProjectName SDK exists test

import pytest
from firstnews_sdk import FirstNewsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FirstNewsSDK.test(None, None)
        assert testsdk is not None
