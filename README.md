# Ethereum Classic Website

Main website: https://ethereumclassic.org/
Develop branch preview: https://ethereumclassic-develop.netlify.com/
i18n branch preview: https://etc-i18n.github.io/

## Adding Content

If you'd like to contribute content or translations, please contact us in the [discord #ethereumclassicwebsite](https://discord.gg/DwQjJ8) channel.

For simple content updates such as editing a blog article, checkout a new branch from `source`, add your content, and create a PR back into source (but do not merge it; this will be managed by maintainers in discord).

## Branches

To enable branch protection on `master`, and due to the way github pages top level org repos, we need to employ a creative use of branching to manage updates.

### Source Code Branches

* [Source](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/source)
  * Checkout this branch to add new *content*
  * Any commit to this branch will trigger a new `staging` deploy
* [Develop](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/develop)
  * Checkout this branch to add new *features*
  * To be merged into source for new releases

### Compiled Code Branches

Do not commit to these branches directly.

* [Master](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/master)
  * Deploys to https://ethereumclassic.org/
* [Staging](https://github.com/ethereumclassic/ethereumclassic.github.io/tree/staging)
  * Deploys to https://staging--ethereumclassic.netlify.com/