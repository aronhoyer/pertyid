# pertyid

Generate cryptographically secure, pretty base64 IDs suitable for a url bar.

## How

`pertyid()` generates a 10 digit string by default, meaning you'll have around ~86 839 771 951 296 000 unique IDs.

In order to generate an ID of a specific length, simply provide the number: `pertyid(13)`.

You can easily prepend your ID with anything you want. Again, just provide it: `pertyid(13, 'u-')`.

## Contribute

1. Fork it
2. Install it (`npm i`)
3. Improve it
4. Test it (`npm test`)
5. Pull request it
