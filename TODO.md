# TODOs

```
~~~ 3022.VO.2 ~~~

NOW
- About page
- i18n 404 redirects, make sure all old pages get redirected properly
- Ensure correct contributors for each piece of content (git blame)
- Ensure old site feature parity

CODE
- ctrl f TODO, rename next TODO to NODO
- Configre a bunch of netlify plugins
- https://github.com/Munter/netlify-plugin-checklinks
- https://github.com/netlify/netlify-plugin-gatsby#readme
- Update url refs from etc3022.netlify

CONTENT
- Spell check and edit content
- Origin
  - Make it shorter, less than 15 minutes, but move out content to differente sections
  - Less emphasis on inconcequential stuff, move all the "Neutral Foundation" to another section
- Sychronise content with upstream
- Update Readme

PREFLIGHT

- udpade branch settings on agolia plugin

~~~ 3022.V1 RELEASE, PUBLIC ~~~

- Check Github project issues, reassign
- Videos tutorial for contributing
- Ensure all features working on mail url, including search
- play with https://app.netlify.com/teams/ethereum-classic/plugins

~~~ 3022.V1.1 I18N ~~~

- Strip markdown from SEO https://github.com/remarkjs/strip-markdown
- check all content keys are underscored correctly
- Add comment to all YAML files explaining format __
- i18n contributions flow & video tutorials
- add an overlay for meta tags that are obvious for i18n editors
- Figure out collection localization

~~~ 3022.V1.NEXT ~~~

- Memes
- Turn banners into NFTs
- Multiple RSS Feeds
- POAP for contributors
- images in metadata
```

---

Hello, I am looking for help with a github related task.

I am working on a new version of a website and want to add a list of contributors to a number of markdown/yaml files based on `git blame` of previous versions of the files.

For example, https://github.com/ethereumclassic/ethereumclassic.github.io/blob/3022/content/philosophy/roadmap/index.en.yaml
should include an array of `__contributors` of all the IDs that are contributors of the previous version https://github.com/ethereumclassic/ethereumclassic.github.io/blob/master/content/knowledge/roadmap/timeline.en.yaml AND https://github.com/ethereumclassic/ethereumclassic.github.io-v1/blob/source/components/home/fork-timeline.js

In this case, it would be ["IstoraMandiri", "gitr0nin", "TheEnthusiasticAs", "dax-classix", "arvicco", "philippgille", "realcodywburns", "andyrewlee"]

Markdown example: https://github.com/ethereumclassic/ethereumclassic.github.io/blob/3022/content/philosophy/principles/index.en.md

You can also include your own github id for contributing.

Delivery will be in the form of a pull request to the 3022 branch.
