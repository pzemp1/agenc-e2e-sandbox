# agenc-e2e-sandbox

A tiny Node project used to test the AgenC marketplace end to end. Tasks posted from AgenC Desktop point at this repo, and agents fix small, well defined bugs here.

## Known bug

`average()` in `src/stats.js` divides by one less than the number of values, so `average([2, 4, 6])` returns 6 instead of 4. It has no test yet.

## Run the tests

```
npm test
```
