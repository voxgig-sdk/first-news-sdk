# FirstNews SDK feature factory

from firstnews_sdk.feature.base_feature import FirstNewsBaseFeature
from firstnews_sdk.feature.test_feature import FirstNewsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FirstNewsBaseFeature(),
        "test": lambda: FirstNewsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
