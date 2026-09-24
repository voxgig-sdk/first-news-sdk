

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"channels":{"a":true,"h":"Channels","n":"channels","r":false,"sh":"List of news channels this item is published on","t":"`$ARRAY`","key$":"channels","index$":0},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"Full HTML content of the news item","t":"`$STRING`","key$":"content","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the news item","t":"`$INTEGER`","key$":"id","index$":2},"link":{"a":true,"fo":"uri","h":"Link","n":"link","r":false,"sh":"URL to the full news article","t":"`$STRING`","key$":"link","index$":3},"published":{"a":true,"h":"Published","n":"published","r":false,"sh":"Publication date and time","t":"`$STRING`","key$":"published","index$":4},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"sh":"Brief summary of the news item","t":"`$STRING`","key$":"summary","index$":5},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the news item","t":"`$STRING`","key$":"title","index$":6}},"id":{"field":"id","name":"id"},"name":"new","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /news","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"What's New","k":"query","n":"channel","or":"channel","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":100,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"link","or":"link","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":false,"k":"query","n":"pretty","or":"pretty","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/news","q":{"exist":["after","before","channel","limit","link","offset","pretty","q"]},"r":{},"s":[{"lit":"news"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /news/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":40558,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/news/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"news"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"new","name__orig":"new","Name":"New","name_":"new","name-":"new","NAME":"NEW","index$":0}, {"active":true,"entity":"new","key$":"BasicNewFlow","kind":"basic","name":"BasicNewFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"new_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"new_ref01","srcdatavar":"new_ref01_data","suffix":"_dt0"},"m":{"id":"new01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-new_ref01"}}],"index$":1}]}, 'New', {"GET /news":{"protocol":"http","operationId":"getNews","responses":{"200":{"description":"Successful response with news items","headers":{"Last-Modified":{"description":"The last modified date of the news data","schema":{"type":"string","format":"date-time"}}},"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"description":"Status of the API response","example":"OK","key$":"status","type":"string"},"status-code":{"description":"HTTP status code","example":200,"key$":"status-code","type":"integer"},"version":{"description":"API version","example":"1","key$":"version","type":"string"},"last-modified":{"description":"Last modified timestamp","example":"Tue, 12 Jul 2016 15:42:31 GMT","key$":"last-modified","type":"string"},"total":{"description":"Total number of news items matching the query","example":249,"key$":"total","type":"integer"},"limit":{"description":"Maximum number of results returned","example":3,"key$":"limit","type":"integer"},"offset":{"description":"Number of results skipped","example":0,"key$":"offset","type":"integer"},"access":{"description":"Access level of the endpoint","example":"public","key$":"access","type":"string"},"data":{"description":"Array of news items","items":{"properties":{"id":{"description":"Unique identifier for the news item","example":40558,"type":"integer","key$":"id"},"link":{"description":"URL to the full news article","example":"https://www.first.org/newsroom/releases/20160711","format":"uri","type":"string","key$":"link"},"published":{"description":"Publication date and time","example":"Mon, 11 Jul 2016 18:54:00 GMT","type":"string","key$":"published"},"summary":{"description":"Brief summary of the news item","example":"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.","type":"string","key$":"summary"},"title":{"description":"Title of the news item","example":"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis","type":"string","key$":"title"}},"type":"object","x-ref":"#/components/schemas/NewsItem","index$":0},"key$":"data","type":"array"}},"x-ref":"#/components/schemas/NewsListResponse"},"example":{"status":"OK","status-code":200,"version":"1","last-modified":"Tue, 12 Jul 2016 15:42:31 GMT","total":249,"limit":3,"offset":0,"access":"public","data":[{"id":40558,"title":"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis","summary":"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.","link":"https://www.first.org/newsroom/releases/20160711","published":"Mon, 11 Jul 2016 18:54:00 GMT"}]}}}},"400":{"description":"Bad request - Invalid parameters"},"429":{"description":"Rate limit exceeded"},"500":{"description":"Internal server error"}},"parameters":[{"name":"channel","in":"query","description":"Title of the news channel the news should be listed on. Each news item may be linked to more than one News Channel.","required":false,"schema":{"type":"string"},"example":"What's New","index$":0},{"name":"link","in":"query","description":"News item URL. Items published at FIRST website do not contain the domain name.","required":false,"schema":{"type":"string"},"index$":1},{"name":"before","in":"query","description":"ISO 8601 Formatted date. Returns only news older than the input. If the timezone is not specified, it'll be considered UTC.","required":false,"schema":{"type":"string","format":"date-time"},"index$":2},{"name":"after","in":"query","description":"ISO 8601 Formatted date. Returns only news newer than the input. If the timezone is not specified, it'll be considered UTC.","required":false,"schema":{"type":"string","format":"date-time"},"index$":3},{"name":"q","in":"query","description":"Free text search at the news title, summary and URL.","required":false,"schema":{"type":"string"},"index$":4},{"name":"limit","in":"query","description":"Maximum number of results to return. The maximum allowed resultset is 10,000 objects.","required":false,"schema":{"type":"integer","default":100,"maximum":10000},"index$":5},{"name":"offset","in":"query","description":"Number of results to skip for pagination.","required":false,"schema":{"type":"integer","default":0},"index$":6},{"name":"pretty","in":"query","description":"Format the JSON response for better readability.","required":false,"schema":{"type":"boolean","default":false},"index$":7}],"securitySource":"unspecified"},"GET /news/{id}":{"protocol":"http","operationId":"getNewsById","responses":{"200":{"description":"Successful response with detailed news item","headers":{"Last-Modified":{"description":"The last modified date of the news item","schema":{"type":"string","format":"date-time"}}},"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","description":"Status of the API response","example":"OK"},"status-code":{"type":"integer","description":"HTTP status code","example":200},"version":{"type":"string","description":"API version","example":"1"},"last-modified":{"type":"string","description":"Last modified timestamp","example":"Mon, 11 Jul 2016 18:58:35 GMT"},"access":{"type":"string","description":"Access level of the endpoint","example":"public"},"data":{"type":"object","properties":{"id":{"type":"integer","description":"Unique identifier for the news item","example":40558,"key$":"id"},"title":{"type":"string","description":"Title of the news item","example":"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis","key$":"title"},"summary":{"type":"string","description":"Brief summary of the news item","example":"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.","key$":"summary"},"link":{"type":"string","format":"uri","description":"URL to the full news article","example":"https://www.first.org/newsroom/releases/20160711","key$":"link"},"content":{"type":"string","description":"Full HTML content of the news item","example":"<p><strong>Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents</strong></p>","key$":"content"},"channels":{"type":"array","description":"List of news channels this item is published on","items":{"type":"string"},"example":["FIRST Newsroom","Press Releases","What's New"],"key$":"channels"},"published":{"type":"string","description":"Publication date and time","example":"Mon, 11 Jul 2016 18:54:00 GMT","key$":"published"}},"x-ref":"#/components/schemas/NewsItemDetail","index$":0}},"x-ref":"#/components/schemas/NewsDetailResponse"},"example":{"status":"OK","status-code":200,"version":"1","last-modified":"Mon, 11 Jul 2016 18:58:35 GMT","access":"public","data":{"id":40558,"title":"FIRST calls for participants for a new Special Interest Group (SIG) on Malware Analysis","summary":"Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents.","link":"https://www.first.org/newsroom/releases/20160711","content":"<p><strong>Forum invites stakeholders to get involved in sharing best practice to mitigate malware incidents</strong></p>","channels":["FIRST Newsroom","Press Releases","What's New"],"published":"Mon, 11 Jul 2016 18:54:00 GMT"}}}}},"404":{"description":"News item not found"},"429":{"description":"Rate limit exceeded"},"500":{"description":"Internal server error"}},"parameters":[{"name":"id","in":"path","description":"The unique identifier of the news item","required":true,"schema":{"type":"integer"},"example":40558,"index$":0}],"securitySource":"unspecified"}})
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
  
