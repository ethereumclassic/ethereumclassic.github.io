# Ethereum Classic Web

Thanks for supporting Ethereum Classic!

This app is written in [gatsby](https://github.com/gatsbyjs/gatsby) (React & ES6) and generates static HTML to be served by github pages.

## Contributing

**Please checkout the [`source`](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/source) branch for making updates**

Do not directly modify `master` branch; it is for [serving](https://help.github.com/articles/user-organization-and-project-pages/) the compiled static html only

### Develop

1. Clone this repo, checkout `source`
2. `npm install`
3. `npm start`

#### Where to add content?

* *Blog Posts*: Just add a new markdown file in `/pages/blog` similar to [this](https://github.com/ethereumclassic/ethereumclassic.github.io/blob/source/pages/blog/2016-08-14-new-website.md)
* *Press Articles*: Add a new item to the top of the list in `/contents/press.yaml`
* *Fork Timeline*: As time goes by, drama unfolds, and the timeline needs to be updated. This can be edited in `components/home/fork-timeline.js`. Get icon refs from [font awesome](http://fontawesome.io/icons/)
* *Advanced Editing*: The whole app is written in react, you can modify the layout of the landing page and drill down into components from `/pages/index.js`
* *Future Editing*: Soon we'll have multiple pages, watch this space for more info

### Build

Building manually isn't required, but you may wish to do so before pushing to ensure everything looks as you'd expect.

Run `npm run build`, and open up `/public/index.html` with a static web server.

### Deploy

Simply push changes to the `source` branch and Travis CI will handle the rest rest.

You can also manually deploy (not recommended) by pushing to the `master` branch:

1. `npm run build-prefix-links`
2. Copy contents of `/public` (move it)
3. Checkout `master`
4. Replace contents of `master` with `/public`
5. Push

## License

Everything that's not already copyrighted is licensed under [CC0](https://creativecommons.org/choose/zero/) (for graphics) and [TBD ULTRA-OPEN PUBLIC DOMAIN LICENSE].
