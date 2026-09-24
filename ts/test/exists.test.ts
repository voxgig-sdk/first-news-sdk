
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FirstNewsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FirstNewsSDK.test()
    equal(testsdk instanceof FirstNewsSDK, true,
      'FirstNewsSDK.test() must return a client synchronously')
  })

})
