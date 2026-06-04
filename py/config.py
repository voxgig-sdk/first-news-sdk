# FirstNews SDK configuration


def make_config():
    return {
        "main": {
            "name": "FirstNews",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "last_modified",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "link",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "published",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "status_code",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "summary",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
        ],
        "name": "new",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "before",
                      "orig": "before",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "What's New",
                      "kind": "query",
                      "name": "channel",
                      "orig": "channel",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 100,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "link",
                      "orig": "link",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "offset",
                      "orig": "offset",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "pretty",
                      "orig": "pretty",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/news",
                "parts": [
                  "news",
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
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/news/{id}",
                "parts": [
                  "news",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
