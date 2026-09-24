# FirstNews SDK configuration

module FirstNewsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "FirstNews",
        "slug" => "first-news",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.first.org/data/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "new" => {},
        },
      },
      "entity" => {
        "new" => {
          "fields" => [
            {
              "name" => "channels",
              "title" => "Channels",
              "type" => "`$ARRAY`",
              "short" => "List of news channels this item is published on",
            },
            {
              "name" => "content",
              "title" => "Content",
              "type" => "`$STRING`",
              "short" => "Full HTML content of the news item",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Unique identifier for the news item",
            },
            {
              "name" => "link",
              "title" => "Link",
              "type" => "`$STRING`",
              "short" => "URL to the full news article",
              "format" => "uri",
            },
            {
              "name" => "published",
              "title" => "Published",
              "type" => "`$STRING`",
              "short" => "Publication date and time",
            },
            {
              "name" => "summary",
              "title" => "Summary",
              "type" => "`$STRING`",
              "short" => "Brief summary of the news item",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "short" => "Title of the news item",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "new",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/news",
                  "segments" => [
                    {
                      "lit" => "news",
                    },
                  ],
                  "parts" => [
                    "news",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "after",
                        "orig" => "after",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "before",
                        "orig" => "before",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "channel",
                        "orig" => "channel",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "What's New",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 100,
                      },
                      {
                        "name" => "link",
                        "orig" => "link",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                      {
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 0,
                      },
                      {
                        "name" => "pretty",
                        "orig" => "pretty",
                        "type" => "`$BOOLEAN`",
                        "kind" => "query",
                        "example" => false,
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/news/{id}",
                  "segments" => [
                    {
                      "lit" => "news",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "parts" => [
                    "news",
                    "{id}",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                  "args" => {
                    "params" => [
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "param",
                        "reqd" => true,
                        "example" => 40558,
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FirstNewsFeatures.make_feature(name)
  end
end
