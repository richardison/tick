# Tick [![Build Status](https://travis-ci.org/FoKo/tick.svg?branch=master)](https://travis-ci.org/FoKo/tick) [![codecov](https://codecov.io/gh/FoKo/tick/branch/master/graph/badge.svg)](https://codecov.io/gh/FoKo/tick) [![Greenkeeper badge](https://badges.greenkeeper.io/FoKo/tick.svg)](https://greenkeeper.io/)

Utilities for working with dates indifferent to timezone.

[![NPM](https://nodei.co/npm/@foko/tick.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@foko/tick/)

**Features:**

 - [Adding/subtracting](#addingsubtracting)
 - [Constants](#constants)
 - [Getters](#getters)
 - [Starters & Enders](#starters-enders)

*For the sake of avoiding repetition, assume that there is a line importing Tick
in all examples.*

## Adding/Subtracting

```javascript
const today = Tick.date();

// add a day
const tomorrow = today + Tick.$.Day;

// subtract a week
const lastWeek = today - Tick.$.Week;

// next year, 2 weeks ago, 4 days back
const random = today + (2 * Tick.$.Weeks) - (4 * Tick.$.Days)
```

## Constants

For the sake of transparency, the constants used within this module are
exported on the Tick identifier. This is mostly to avoid confusions around
ordering of certain things (i.e. which day of the week is first? is January
1 or 0?).

All numbers will start at 0 (month of year, day of week) **with the exception
of the date itself, since that is universally considered to start at 1**.

```javascript
Tick.Days = [
  'Sunday',
  'Monday',
  // etc.
]

Tick.Months = [
  'January',
  'February',
  // etc.
]
```

## Getters

### `.getDayOfMonth(date)`

 - Returns `number`: an integer representing the day of the month (i.e. date).

## Starters & Enders

### Jumping to the start of something

Possible units:

 - month (takes you to day 1 in the month)

Example:

```javascript
const today = Tick.date('Mar ...')
Tick.startOf(today, 'month') // returns 3
```

## License

Copyright &copy; 2018-present Foko Inc. All rights reserved.

Licensed under the [MIT license](LICENSE.md).
