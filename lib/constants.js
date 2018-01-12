/**
 * @file lib/constants.js
 * @license MIT
 * @copyright 2018-present Foko Inc. All rights reserved.
 */

const $ = exports

function define(name, value) {
  $[name] = $[name + 's'] = value
}

define('Millisecond', 1)
define('Second', 1000 * $.Milliseconds)
define('Minute', 60 * $.Seconds)
define('Hour', 60 * $.Minutes)
define('Day', 24 * $.Hours)
define('Week', 7 * $.Days)
