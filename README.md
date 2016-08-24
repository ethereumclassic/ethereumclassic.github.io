# Ethereum Classic Web

Thanks for supporting Ethereum Classic!

This app is written in [gatsby](https://github.com/gatsbyjs/gatsby) (React & ES6) and generates static HTML to be served by github pages.

## Contributing

**Please checkout the [`source`](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/source) branch for making updates**

Do not directly modify `master` branch; it is for [serving](https://help.github.com/articles/user-organization-and-project-pages/) the compiled static html only

### Develop

1. You need to have [Node.js installed](https://nodejs.org/en/download/)
2. Fork this repo under your name
2. Clone the forked repo locally, checkout `source`
3. `npm install`
4. `npm start`

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

1. Push changes to your fork
2. Create pull request from the `source` branch of your repo to `source` branch of ethereumclassic/ethereumclassic.github.io/
3. Travis CI will handle the rest.

## License

Everything that's not already copyrighted is licensed under [CC0](https://creativecommons.org/choose/zero/) (for graphics) and [TBD ULTRA-OPEN PUBLIC DOMAIN LICENSE].

---

Created by Dax, owned by all
