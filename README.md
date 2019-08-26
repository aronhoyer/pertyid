# pertyid

Generate cryptographically secure, pretty base64 IDs suitable for a url bar.

## How

`pertyid(length, prepend)`

* Provide a `length` argument to generate an ID of a given length.
* Provide a `prepend` argument to prepend the ID with a string.

### Generate

```js
const pertyid = require('pertyid');

/* generates a 10 digit ID */
pertyid() // sW1PHpPhKw

/* generates a 21 digit ID */
pertyid(21) // H0HAi5f3kbTTsAVO9oI1h

/* generates a 13 digit ID, prepended with 'u-' */
pertyid(13, 'u-') // u-khvXejSWsYbC1
```

## Contribute

1. Fork it
2. Install it (`npm i`)
3. Improve it
4. Test it (`npm test`)
5. Pull request it
