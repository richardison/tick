const test = require('ava')
const Tick = require('../')

test('should be able to figure out valid timestamps', t => {
  t.notThrows(() => Tick.assert(0))

  t.throws(() => Tick.assert(Math.MAX_SAFE_INTEGER * 2))
  t.throws(() => Tick.assert('blah'))
  t.throws(() => Tick.assert({}))
  t.throws(() => Tick.assert([]))
  t.throws(() => Tick.assert(!0))
})
