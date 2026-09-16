

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FirstNewsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('NewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FIRST_NEWS_TEST_LIVE=TRUE.
  afterEach(liveDelay('FIRST_NEWS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FirstNewsSDK.test()
    const ent = testsdk.New()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FIRST_NEWS_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'new.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"channels","req":false,"short":"List of news channels this item is published on","type":"`$ARRAY`","index$":0},{"active":true,"name":"content","req":false,"short":"Full HTML content of the news item","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the news item","type":"`$INTEGER`","index$":2},{"active":true,"format":"uri","name":"link","req":false,"short":"URL to the full news article","type":"`$STRING`","index$":3},{"active":true,"name":"published","req":false,"short":"Publication date and time","type":"`$STRING`","index$":4},{"active":true,"name":"summary","req":false,"short":"Brief summary of the news item","type":"`$STRING`","index$":5},{"active":true,"name":"title","req":false,"short":"Title of the news item","type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"new","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"before","orig":"before","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"What's New","kind":"query","name":"channel","orig":"channel","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"link","orig":"link","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":5},{"active":true,"example":false,"kind":"query","name":"pretty","orig":"pretty","reqd":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /news","json":"{\"operationId\":\"getNews\",\"parameters\":[{\"description\":\"Title of the news channel the news should be listed on. Each news item may be linked to more than one News Channel.\",\"example\":\"What's New\",\"in\":\"query\",\"name\":\"channel\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"News item URL. Items published at FIRST website do not contain the domain name.\",\"in\":\"query\",\"name\":\"link\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"ISO 8601 Formatted date. Returns only news older than the input. If the timezone is not specified, it'll be considered UTC.\",\"in\":\"query\",\"name\":\"before\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"ISO 8601 Formatted date. Returns only news newer than the input. If the timezone is not specified, it'll be considered UTC.\",\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Free text search at the news title, summary and URL.\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Maximum number of results to return. The maximum allowed resultset is 10,000 objects.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":10000,\"type\":\"integer\"}},{\"description\":\"Number of results to skip for pagination.\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Format the JSON response for better readability.\",\"in\":\"query\",\"name\":\"pretty\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"access\":\"public\",\"data\":[{\"id\":40558,\"link\":\"https://www.first.org/newsroom/releases/20160711\",\"published\":\"Mon, 11 Jul 2016 18:54:00 GMT\",\"summary\":\"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.\",\"title\":\"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis\"}],\"last-modified\":\"Tue, 12 Jul 2016 15:42:31 GMT\",\"limit\":3,\"offset\":0,\"status\":\"OK\",\"status-code\":200,\"total\":249,\"version\":\"1\"},\"schema\":{\"properties\":{\"access\":{\"description\":\"Access level of the endpoint\",\"example\":\"public\",\"type\":\"string\"},\"data\":{\"description\":\"Array of news items\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the news item\",\"example\":40558,\"type\":\"integer\"},\"link\":{\"description\":\"URL to the full news article\",\"example\":\"https://www.first.org/newsroom/releases/20160711\",\"format\":\"uri\",\"type\":\"string\"},\"published\":{\"description\":\"Publication date and time\",\"example\":\"Mon, 11 Jul 2016 18:54:00 GMT\",\"type\":\"string\"},\"summary\":{\"description\":\"Brief summary of the news item\",\"example\":\"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the news item\",\"example\":\"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"last-modified\":{\"description\":\"Last modified timestamp\",\"example\":\"Tue, 12 Jul 2016 15:42:31 GMT\",\"type\":\"string\"},\"limit\":{\"description\":\"Maximum number of results returned\",\"example\":3,\"type\":\"integer\"},\"offset\":{\"description\":\"Number of results skipped\",\"example\":0,\"type\":\"integer\"},\"status\":{\"description\":\"Status of the API response\",\"example\":\"OK\",\"type\":\"string\"},\"status-code\":{\"description\":\"HTTP status code\",\"example\":200,\"type\":\"integer\"},\"total\":{\"description\":\"Total number of news items matching the query\",\"example\":249,\"type\":\"integer\"},\"version\":{\"description\":\"API version\",\"example\":\"1\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with news items\",\"headers\":{\"Last-Modified\":{\"description\":\"The last modified date of the news data\",\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}}},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/news","segments":[{"lit":"news"}],"select":{"exist":["after","before","channel","limit","link","offset","pretty","q"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":40558,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /news/{id}","json":"{\"operationId\":\"getNewsById\",\"parameters\":[{\"description\":\"The unique identifier of the news item\",\"example\":40558,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"access\":\"public\",\"data\":{\"channels\":[\"FIRST Newsroom\",\"Press Releases\",\"What's New\"],\"content\":\"<p><strong>Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents</strong></p>\",\"id\":40558,\"link\":\"https://www.first.org/newsroom/releases/20160711\",\"published\":\"Mon, 11 Jul 2016 18:54:00 GMT\",\"summary\":\"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.\",\"title\":\"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis\"},\"last-modified\":\"Mon, 11 Jul 2016 18:58:35 GMT\",\"status\":\"OK\",\"status-code\":200,\"version\":\"1\"},\"schema\":{\"properties\":{\"access\":{\"description\":\"Access level of the endpoint\",\"example\":\"public\",\"type\":\"string\"},\"data\":{\"properties\":{\"channels\":{\"description\":\"List of news channels this item is published on\",\"example\":[\"FIRST Newsroom\",\"Press Releases\",\"What's New\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"content\":{\"description\":\"Full HTML content of the news item\",\"example\":\"<p><strong>Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents</strong></p>\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the news item\",\"example\":40558,\"type\":\"integer\"},\"link\":{\"description\":\"URL to the full news article\",\"example\":\"https://www.first.org/newsroom/releases/20160711\",\"format\":\"uri\",\"type\":\"string\"},\"published\":{\"description\":\"Publication date and time\",\"example\":\"Mon, 11 Jul 2016 18:54:00 GMT\",\"type\":\"string\"},\"summary\":{\"description\":\"Brief summary of the news item\",\"example\":\"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the news item\",\"example\":\"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis\",\"type\":\"string\"}},\"type\":\"object\"},\"last-modified\":{\"description\":\"Last modified timestamp\",\"example\":\"Mon, 11 Jul 2016 18:58:35 GMT\",\"type\":\"string\"},\"status\":{\"description\":\"Status of the API response\",\"example\":\"OK\",\"type\":\"string\"},\"status-code\":{\"description\":\"HTTP status code\",\"example\":200,\"type\":\"integer\"},\"version\":{\"description\":\"API version\",\"example\":\"1\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with detailed news item\",\"headers\":{\"Last-Modified\":{\"description\":\"The last modified date of the news item\",\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}}},\"404\":{\"description\":\"News item not found\"},\"429\":{\"description\":\"Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/news/{id}","segments":[{"lit":"news"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"new","name__orig":"new","Name":"New","name_":"new","name-":"new","NAME":"NEW","index$":0}, {"active":true,"entity":"new","key$":"BasicNewFlow","kind":"basic","name":"BasicNewFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"new_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"new_ref01","srcdatavar":"new_ref01_data","suffix":"_dt0"},"match":{"id":"new01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-new_ref01"}}],"index$":1}]}, 'New')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let new_ref01_data = Object.values(setup.data.existing.new)[0] as any

    // LIST
    const new_ref01_ent = client.New()
    const new_ref01_match: any = {}

    const new_ref01_list = (await new_ref01_ent.list(new_ref01_match)).map((e: any) => e.data())


    // LOAD
    const new_ref01_match_dt0: any = {}
    new_ref01_match_dt0.id = new_ref01_data.id
    const new_ref01_data_dt0 = (await new_ref01_ent.load(new_ref01_match_dt0)).data()
    assert(new_ref01_data_dt0.id === new_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/new/NewTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FirstNewsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['new01','new02','new03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FIRST_NEWS_TEST_NEW_ENTID': idmap,
    'FIRST_NEWS_TEST_LIVE': 'FALSE',
    'FIRST_NEWS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FIRST_NEWS_TEST_NEW_ENTID']

  const live = 'TRUE' === env.FIRST_NEWS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FIRST_NEWS_TEST_NEW_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FirstNewsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FIRST_NEWS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
