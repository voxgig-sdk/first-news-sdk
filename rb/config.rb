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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "short" => "List of news channels this item is published on",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "content",
              "short" => "Full HTML content of the news item",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the news item",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "link",
              "short" => "URL to the full news article",
              "type" => "`$STRING`",
            },
            {
              "name" => "published",
              "short" => "Publication date and time",
              "type" => "`$STRING`",
            },
            {
              "name" => "summary",
              "short" => "Brief summary of the news item",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Title of the news item",
              "type" => "`$STRING`",
            },
          ],
          "name" => "new",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "after",
                        "orig" => "after",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "before",
                        "orig" => "before",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "What's New",
                        "kind" => "query",
                        "name" => "channel",
                        "orig" => "channel",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 100,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "link",
                        "orig" => "link",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 0,
                        "kind" => "query",
                        "name" => "offset",
                        "orig" => "offset",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "pretty",
                        "orig" => "pretty",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/news",
                  "parts" => [
                    "news",
                  ],
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 40558,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/news/{id}",
                  "parts" => [
                    "news",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.data`",
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
