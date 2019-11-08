# ETC Web v2

## Work in progress

Presently focusing on content and structure, the design/layouts will be polished as it nears v2 release.

### v2

#### Content

- Remove a bunch of mining pools
- SEO Description & keywords for all pages

#### Styling

- Styling / prettification pass

### vi18n

- Documentation
- use YAML as well as / instead of JSON
- Structure all pages ready for i18n usage (including powered by, etc...)
- replace localeDateStrings with i18nNext
- Review `TODO`s
- Manage 404 for missing i18n (or just create english version)
- i18n date formatting etc.
- SEO tags (keywords, og:locale)
- Create i18n translations & guide (make a script?)
- Make global i18ns hot-reloadable

### Add to tracker

- ~ Mailchimp (using WP endpoint for now)
- Migrate & Update ETC Timeline (add to roadmap)
- Accessibility
- More Knowledge Base content
- Images for teams
- Improve hamburger behaviour (click outside = hide)
- Refactor & comment gatbsy-node (?)
- Use LocalStorage to remember hidden modal
- Expand ETC summit section, day 2 vids, old years, etc.
- Pull dapps from [dappdirect](https://dappdirect.net/)
- Use graphql fragements
- Improve blog navigation / pagination / next article, etc.
- Search content / blog posts
- Make the powered by page more like original SoTD, searchable, use GraphQL
- Integrate multiple different education resources (?)
- Tina.js

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
