# Ethereum Classic Website

https://ethereumclassic.org/

## Adding Content

If you'd like to contribute content or translations, please contact us in the [discord #ethereumclassicwebsite](https://discord.gg/DwQjJ8) channel for further instructions and access rights.

Overall structure and content is currently being finalized in this repo's [wiki](https://github.com/ethereumclassic/ethereumclassic.github.io/wiki).

For simple content updates such as editing a blog article, checkout a new branch from `source`, add your content, and create a PR back into source (but do not merge it; this will be managed by maintainers in discord).

## Development

This project uses [gatsby](https://www.gatsbyjs.org/).

## Deployment

Updates to the `source` branch are automatically built and deployed to to https://ethereumclassic.org/ (via netlify). The `source` branch is protected; pull requests must be made against it and approved by 3 contributors.

All other branches will be automatically built and deployed via netlify, for example the `develop` branch: https://develop--ethereumclassic.netlify.com/