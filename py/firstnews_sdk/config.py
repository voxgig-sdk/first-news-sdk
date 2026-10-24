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
          "now": "`$FUNCTION`",
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
            "name": "access",
            "title": "Access",
            "type": "`$STRING`",
            "short": "Access level of the endpoint",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the news item",
          },
          {
            "name": "lastmodified",
            "title": "Lastmodified",
            "type": "`$STRING`",
            "short": "Last modified timestamp",
          },
          {
            "name": "link",
            "title": "Link",
            "type": "`$STRING`",
            "short": "URL to the full news article",
            "format": "uri",
          },
          {
            "name": "published",
            "title": "Published",
            "type": "`$STRING`",
            "short": "Publication date and time",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Status of the API response",
          },
          {
            "name": "statuscode",
            "title": "Statuscode",
            "type": "`$INTEGER`",
            "short": "HTTP status code",
          },
          {
            "name": "summary",
            "title": "Summary",
            "type": "`$STRING`",
            "short": "Brief summary of the news item",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Title of the news item",
          },
          {
            "name": "version",
            "title": "Version",
            "type": "`$STRING`",
            "short": "API version",
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
                "kind": "http",
                "method": "GET",
                "orig": "/news",
                "segments": [
                  {
                    "lit": "news",
                  },
                ],
                "parts": [
                  "news",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data`",
                },
                "args": {
                  "query": [
                    {
                      "name": "after",
                      "orig": "after",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "before",
                      "orig": "before",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "channel",
                      "orig": "channel",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "What's New",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 100,
                    },
                    {
                      "name": "link",
                      "orig": "link",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "offset",
                      "orig": "offset",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 0,
                    },
                    {
                      "name": "pretty",
                      "orig": "pretty",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "news",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 40558,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
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
