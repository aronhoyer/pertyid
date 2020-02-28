# pertyid

Generate unique, pretty base64 IDs suitable for a url bar.

## How

`pertyid(length?: number)`

* Provide a `length` argument to generate an ID of a given length.

### Generate

```js
const pertyid = require('pertyid');
import pertyid from 'pertyid'

/* generates a 10 digit ID */
pertyid() // sW1PHpPhKw

/* generates a 21 digit ID */
pertyid(21) // H0HAi5f3kbTTsAVO9oI1h

/* generate a 10 digit ID with prefix */
const id = `u-${pertyid()}`
console.log(id) // u-d9NjGJUkzw
```

## Contribute

1. Fork it
2. Install it (`npm i`)
3. Improve it
4. Test it (`npm test`)
5. Pull request it
