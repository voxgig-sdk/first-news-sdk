# FirstNews SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FirstNews",
            "slug": "first-news",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.first.org/data/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "new": {},
            },
        },
        "entity": {
      "new": {
        "fields": [
          {
            "name": "channels",
            "short": "List of news channels this item is published on",
            "type": "`$ARRAY`",
          },
          {
            "name": "content",
            "short": "Full HTML content of the news item",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the news item",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "link",
            "short": "URL to the full news article",
            "type": "`$STRING`",
          },
          {
            "name": "published",
            "short": "Publication date and time",
            "type": "`$STRING`",
          },
          {
            "name": "summary",
            "short": "Brief summary of the news item",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Title of the news item",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "new",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "before",
                      "orig": "before",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "What's New",
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "pretty",
                      "orig": "pretty",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/news",
                "segments": [
                  {
                    "lit": "news",
                  },
                ],
                "select": {
                  "exist": [
                    "after",
                    "before",
                    "channel",
                    "limit",
                    "link",
                    "offset",
                    "pretty",
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "news",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 40558,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/news/{id}",
                "segments": [
                  {
                    "lit": "news",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "parts": [
                  "news",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
