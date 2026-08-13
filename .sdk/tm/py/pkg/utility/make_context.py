# FirstNews SDK utility: make_context

from projectname_sdk.core.context import FirstNewsContext


def make_context_util(ctxmap, basectx):
    return FirstNewsContext(ctxmap, basectx)
