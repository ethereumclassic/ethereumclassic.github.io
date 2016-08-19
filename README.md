# Ethereum Classic Web

### Develop

1. Clone this repo
2. `npm install`
3. `npm start`

### Deploy

**Manual Push:**

1. `npm run build-prefix-links`
2. Copy contents of `/public` (move it)
3. Checkout `master`
4. Replace contents of `master` with `/public`
5. Push

**Automated Checkout:**

Install [`gh-pages`](https://www.npmjs.com/package/gh-pages)

Please see docs.

TODO: Automated Deploy Tool a la https://github.com/ethereumclassic/ethereumclassic.github.io/issues/40
