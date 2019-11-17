# Ethereum Classic Website

## Branches

* [Main website (master branch)](https://ethereumclassic.org/)
* [Preview (staging branch)](https://staging--ethereumclassic.netlify.com/)

Github pages is deployed in `master`; do not make commits to it directly.

To make content updates, push an update to the `source` branch. This will trigger Travis CI to create a new build in the `staging` branch.

The `staging` branch should then be used to create a PR into `master` (which is protected).

## TODOs

* Better docs for for editing content
* Move TODOs into github issues

### Help Needed

* Remove a bunch of mining pools (ETC miners - which ones?)
* Update timeline with major events since 2017
* Day 2 videos for ETC summit
* Add wechat group
* Switch to Mailchimp or another provider for newsletter sign up (using WP endpoint for now)
* (Nice to have) more comprehensive knowledge base page (including more structure introduction, articles, etc.)

### i18n Release (v2.1; ETA late November)

* Documentation / guide for contribution
* Create script for exporting / importing translations
* Structure all pages ready for i18n usage (including powered by, etc...)
* use YAML instead of JSON
* replace localeDateStrings with i18nNext
* Manage 404 for missing i18n (or just create english version)
* Review `TODO`s in code

### To Add To Tracker (v2.x)

#### Content

* More Knowledge Base articles
* Expanded ETC summit section, with agendas, old years, etc.

#### Code

* Pull dapps from [dappdirect](https://dappdirect.net/) (?)
* Accessibility updates (tab navigation etc.)
* Refactor & comment gatbsy-node (?)
* Use LocalStorage to remember hidden modal
* Improve hamburger behaviour (click outside = hide)
* Improve blog navigation / pagination / next article, etc.
* Use graphql fragements
* Search all content & blog posts
* Auto-import multiple different education resources (?)
* Make the Ecosystem by page more like original SoTD, searchable, use GraphQL 
* Tina.js
* Script to automatically meta generate keywords / description for old blog articles