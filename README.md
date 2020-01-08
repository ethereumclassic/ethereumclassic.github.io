# Ethereum Classic Website

i18n Preview: https://etc-i18n.github.io/

## Adding Content

For now, if you'd like to contribute, please contact us in the [discord #ethereumclassicwebsite](https://discord.gg/DwQjJ8) channel.

We're not quite ready for translators to begin contributing translations, but watch this space.

*More detailed instructions to come.*

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