const test = require('ava')
const Tick = require('../')

const $ = require('./utils/constants')
const is = require('./utils/date-is')

test(`${$.TODAY} + 1 day should equal ${$.TOMORROW}`, t => {
  is(
    t,
    $.TODAY + (1 * Tick.$.Day),
    $.TOMORROW,
    'today + 1 day should be tomorrow'
  )
})
