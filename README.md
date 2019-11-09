# ETC Web v2

## Work in progress

Presently focusing on content and structure, the design/layouts will be polished as it nears v2 release.

## About

- Was previously being hosted on wordpress
- After a while of not being updated (centralized)
- Move to Github + Gatbsy
  - Static site generator
  - No backend server
  - Easily published anywhere (IPFS/Github/S3/Filesystem)
  - Very fast & Lightweight
  - Awesome for SEO
  - Less single source of failure (git reviews)
  - Awesome for collaboration (perfect for decentralized projects)
- Anyone can PR a new blog article easily; auto-rebuild in travis
- Netlify creates PR previews that need to be approved in github before being published
- Eventually PRs could be managed on chain

## TODOs

### Public Release (v2)

#### Help Needed

- Content/copy review
- Remove a bunch of mining pools (which ones?)
- Day 2 videos for ETC summit

#### Final Tasks

- Update timeline with major events since 2017
- Change siteMetadata.url before publishing to production

#### Nice to have

- Better knowledge base page (including more structure introduction, articles, etc.)

### i18n Release (v2.1)

- Documentation / guide for contribution
- Create script for exporting / importing translations
- Structure all pages ready for i18n usage (including powered by, etc...)
- use YAML instead of JSON
- replace localeDateStrings with i18nNext
- Manage 404 for missing i18n (or just create english version)
- Review `TODO`s in code

### To Add To Tracker (v2.x)

#### Content

- Images/logos for teams
- More Knowledge Base content
- Expand ETC summit section, day 2 vids, old years, etc.

#### Code

- Pull dapps from [dappdirect](https://dappdirect.net/)
- Accessibility updates (tab navigation etc.)
- Refactor & comment gatbsy-node (?)
- Use LocalStorage to remember hidden modal
- Improve hamburger behaviour (click outside = hide)
- Improve blog navigation / pagination / next article, etc.
- Use graphql fragements
- Search all content & blog posts
- Auto-import multiple different education resources (?)
- Make the Ecosystem by page more like original SoTD, searchable, use GraphQL

#### Misc 

- ~ Mailchimp (using WP endpoint for now)
- Tina.js