# Ethereum Classic Website

https://ethereumclassic.org/

## Adding Content

If you'd like to contribute content or translations, please contact the [discord #ethereumclassicwebsite](https://discord.gg/DwQjJ8) channel for further instructions and access rights.

Overall structure and content is currently being finalized in this repo's [wiki](https://github.com/ethereumclassic/ethereumclassic.github.io/wiki).

For simple content updates such as editing a blog article, checkout a new branch from `source`, add your content, and create a PR back into source.

## Deployment

Updates to the `source` branch are automatically built and deployed to to https://ethereumclassic.org/ (via netlify). The `source` branch is protected; pull requests must be made against it and approved by 3 contributors.

All other branches will be automatically built and deployed via netlify, for example the `develop` branch: https://develop--ethereumclassic.netlify.com/

## Development

This project uses [gatsby](https://www.gatsbyjs.org/) and a custom i18n content management system. More documentation to come.

To run the development mode, clone this repo, run `npm install` followed by `npm start`.

See `package.json` for scripts scripts.
