
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://api.first.org/data/v1',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      new: {
      },

    }
  }


  entity = {
    "new": {
      "fields": [
        {
          "name": "access",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "data",
          "req": false,
          "type": "`$OBJECT`",
          "active": true,
          "index$": 1
        },
        {
          "name": "id",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "last_modified",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "link",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 4
        },
        {
          "name": "published",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 5
        },
        {
          "name": "status",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "status_code",
          "req": false,
          "type": "`$INTEGER`",
          "active": true,
          "index$": 7
        },
        {
          "name": "summary",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        },
        {
          "name": "version",
          "req": false,
          "type": "`$STRING`",
          "active": true,
          "index$": 10
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "before",
                    "orig": "before",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": "What's New",
                    "kind": "query",
                    "name": "channel",
                    "orig": "channel",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 100,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "link",
                    "orig": "link",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "offset",
                    "orig": "offset",
                    "reqd": false,
                    "type": "`$INTEGER`",
                    "active": true
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "pretty",
                    "orig": "pretty",
                    "reqd": false,
                    "type": "`$BOOLEAN`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/news",
              "parts": [
                "news"
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
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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
                    "reqd": true,
                    "type": "`$INTEGER`",
                    "active": true
                  }
                ]
              },
              "method": "GET",
              "orig": "/news/{id}",
              "parts": [
                "news",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

