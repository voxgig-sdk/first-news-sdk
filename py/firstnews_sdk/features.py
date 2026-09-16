# FirstNews SDK feature factory

from firstnews_sdk.feature.base_feature import FirstNewsBaseFeature
from firstnews_sdk.feature.ratelimit_feature import FirstNewsRatelimitFeature
from firstnews_sdk.feature.retry_feature import FirstNewsRetryFeature
from firstnews_sdk.feature.test_feature import FirstNewsTestFeature
from firstnews_sdk.feature.timeout_feature import FirstNewsTimeoutFeature


_FEATURES = {
    "base": lambda: FirstNewsBaseFeature(),
    "ratelimit": lambda: FirstNewsRatelimitFeature(),
    "retry": lambda: FirstNewsRetryFeature(),
    "test": lambda: FirstNewsTestFeature(),
    "timeout": lambda: FirstNewsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
