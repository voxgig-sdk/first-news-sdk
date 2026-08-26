-- FirstNews SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FirstNews",
      slug = "first-news",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.first.org/data/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["new"] = {},
      },
    },
    entity = {
      ["new"] = {
        ["fields"] = {
          {
            ["name"] = "channels",
            ["short"] = "List of news channels this item is published on",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "content",
            ["short"] = "Full HTML content of the news item",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the news item",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "link",
            ["short"] = "URL to the full news article",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "published",
            ["short"] = "Publication date and time",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "summary",
            ["short"] = "Brief summary of the news item",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the news item",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "new",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "after",
                      ["orig"] = "after",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "before",
                      ["orig"] = "before",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "What's New",
                      ["kind"] = "query",
                      ["name"] = "channel",
                      ["orig"] = "channel",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 100,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "link",
                      ["orig"] = "link",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "pretty",
                      ["orig"] = "pretty",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/news",
                ["parts"] = {
                  "news",
                },
                ["select"] = {
                  ["exist"] = {
                    "after",
                    "before",
                    "channel",
                    "limit",
                    "link",
                    "offset",
                    "pretty",
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 40558,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/news/{id}",
                ["parts"] = {
                  "news",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.data`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
