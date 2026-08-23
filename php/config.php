<?php
declare(strict_types=1);

// FirstNews SDK configuration

class FirstNewsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FirstNews",
                "slug" => "first-news",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.first.org/data/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "new" => [],
                ],
            ],
            "entity" => [
        'new' => [
          'fields' => [
            [
              'name' => 'channels',
              'short' => 'List of news channels this item is published on',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'content',
              'short' => 'Full HTML content of the news item',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the news item',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'link',
              'short' => 'URL to the full news article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'published',
              'short' => 'Publication date and time',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'summary',
              'short' => 'Brief summary of the news item',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the news item',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'new',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'before',
                        'orig' => 'before',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'What\'s New',
                        'kind' => 'query',
                        'name' => 'channel',
                        'orig' => 'channel',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 100,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'link',
                        'orig' => 'link',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'offset',
                        'orig' => 'offset',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'pretty',
                        'orig' => 'pretty',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/news',
                  'parts' => [
                    'news',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'before',
                      'channel',
                      'limit',
                      'link',
                      'offset',
                      'pretty',
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 40558,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/news/{id}',
                  'parts' => [
                    'news',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FirstNewsFeatures::make_feature($name);
    }
}
