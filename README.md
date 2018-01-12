# Tick [![Build Status](https://travis-ci.org/FoKo/tick.svg?branch=master)](https://travis-ci.org/FoKo/tick)

Utilities for working with dates indifferent to timezone.

## Adding/Subtracting

```javascript
const Tick = require('@foko/tick');
const today = Tick.date();

// add a day
const tomorrow = today + Tick.Day;

// subtract a week
const lastWeek = today - Tick.Week;

// next year, 2 weeks ago, 4 days back
const random = today + (2 * Tick.Weeks) - (4 * Tick.Days)
```

## License

Licensed under the [MIT license](LICENSE.md).
