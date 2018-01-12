const test = require('ava')
const Tick = require('../')
const $ = require('./utils/constants')

test('should be able to create a date', t => {
  t.is(Tick.date(new Date(0)), 0, 'should be able to create from a Date')
  t.is(Tick.date(0), 0, 'should be able to create from a Date')

  t.is(
    Math.floor(Tick.date() / Tick.Second),
    Math.floor(Date.now() / Tick.Second),
    'undefined date should be now'
  )

  t.throws(() => Tick.date(Math.MAX_SAFE_INTEGER * 2))
  t.throws(() => Tick.date('blah'))
  t.throws(() => Tick.date({}))
  t.throws(() => Tick.date([]))
  t.throws(() => Tick.date(!0))
})
