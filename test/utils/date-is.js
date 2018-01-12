/**
 * @file test/utils/date-is.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

module.exports = function is (t, a, b, msg) {
  const datA = {
    date: new Date(a),
    ts: a
  }

  const datB = {
    date: new Date(b),
    ts: b
  }

  t.deepEqual(
    datA,
    datB
  )
}
