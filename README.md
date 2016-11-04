# Ethereum Classic Web

Thanks for supporting Ethereum Classic!

This app is written in [gatsby](https://github.com/gatsbyjs/gatsby) (React & ES6) and generates static HTML to be served by github pages.

## Contributing

**Please checkout the [`source`](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/source) branch for making updates**

Do not directly modify `master` branch; it is for [serving](https://help.github.com/articles/user-organization-and-project-pages/) the compiled static html only

### Add content to the site

Create a copy of the website code on your Github account:
       Create a github.com account.
       Visit https://github.com/ethereumclassic/ethereumclassic.github.io .
       Click on "Fork" button in upper right.

To set up your name and email in Git:
       git config --global user.email "<your email goes here>"
       git config --global user.name "<your name goes here>"

To upload a new Markdown file:
       git clone https://github.com/<your Github username>/ethereumclassic.github.io.git
       cd ethereumclassic.github.io
       git checkout source
       Add MD file under pages/blog.
       Rename your MD file to have YYYY-MM-DD-your-title-goes-here.md format.
       Add correct header to MD file as follows:
                ---
                title: "<your title goes here>"
                date: <date, formatted as YYYY-MM-DD>
                author: <your name goes here>
                ---
       git add <your MD file goes here>
       git commit -m "Added a blog post"
       git push

To create a pull request to notify ETC website mainters of your file:
       Visit https://github.com/<your Github username>/ethereumclassic.github.io.git .
       Click on "Compare & pull request" in upper right.
       Add description to form.
       Click the "Create pull request" in middle right.

#### Where to add content?

* *Blog Posts*: Just add a new markdown file in `/pages/blog` similar to [this](https://github.com/ethereumclassic/ethereumclassic.github.io/blob/source/pages/blog/2016-08-14-new-website.md)
* *Press Articles*: Add a new item to the top of the list in `/contents/press.yaml`
* *Fork Timeline*: As time goes by, drama unfolds, and the timeline needs to be updated. This can be edited in `components/home/fork-timeline.js`. Get icon refs from [font awesome](http://fontawesome.io/icons/)
* *Advanced Editing*: The whole app is written in react, you can modify the layout of the landing page and drill down into components from `/pages/index.js`
* *Future Editing*: Soon we'll have multiple pages, watch this space for more info

### Develop site

1. Fork this repo into your own Github account
2. Clone your fork locally, checkout `source`
3. Make sure you have [NodeJS](https://nodejs.org/en/download/) installed
4. `npm install`
5. `npm start`

#### Build

Building manually isn't required, but you may wish to do so before pushing to ensure everything looks as you'd expect.

Run `npm run build`, and open up `/public/index.html` with a static web server.

#### Deploy

Simply push changes to the `source` branch and Travis CI will handle the rest rest.

You can also manually deploy (not recommended) by pushing to the `master` branch:

1. `npm run build-prefix-links`
2. Copy contents of `/public` (move it)
3. Checkout `master`
4. Replace contents of `master` with `/public`
5. Push

## License

Everything that's not already copyrighted is licensed under [CC0](https://creativecommons.org/choose/zero/) (for graphics) and [TBD ULTRA-OPEN PUBLIC DOMAIN LICENSE].
