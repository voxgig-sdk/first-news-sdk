# FirstNews SDK feature factory

from firstnews_sdk.feature.base_feature import FirstNewsBaseFeature
from firstnews_sdk.feature.test_feature import FirstNewsTestFeature


_FEATURES = {
    "base": lambda: FirstNewsBaseFeature(),
    "test": lambda: FirstNewsTestFeature(),
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
