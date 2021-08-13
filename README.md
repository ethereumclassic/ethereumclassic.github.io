<div align="center">

# Ethereum Classic Website

[EthereumClassic.org](https://ethereumclassic.org/) | [Build logs](https://app.netlify.com/sites/ethereumclassic/deploys) | [Edit on GitPod](https://gitpod.io/#https://github.com/ethereumclassic/ethereumclassic.github.io)

![ETC Decentralized Development](https://github.com/ethereumclassic/Media_Kit/blob/master/Graphic_Design/ETC_Community/etc---decentralized-development_38612869451_o.png)

</div>

## Contribute

Become a contributor to the [ethereumclassic.org](https://ethereumclassic.org/) website!

### Translations 🌐

A version of the website with auto-translated languages is [available here](https://babel--ethereumclassic.netlify.app/). We need your help to ensure that these translations make sense to native readers.

If you can help correct these auto-translated items, please submit a pull request!

- Fork this repository
- Check out the `babel` branch
- Open `content/_i18n/[name].yaml`
- Correct the strings (make sure you keep the indentation)
- Submit a Pull Request back into the `babel` branch
- If you need support, or wish to add a language that is not listed, feel free to reach out in discord

### General Instructions

If you want to modify content or add blog articles, you can do so in a number of ways:

New GitHub contributors can follow this [contribution guide](https://guides.github.com/activities/forking/) to contribute to repositories.

- Create an issue with suggested changes (a maintainer will implement the changes)
- Edit directly via the github UI
- [Edit on GitPod](https://gitpod.io/#https://github.com/ethereumclassic/ethereumclassic.github.io) ([instructions](https://www.gitpod.io/docs/pull-requests/))
- Clone this repository yourself, and run using `npm start` (requires Linux/Mac & Node JS installed)

See `package.json` for a list of scripts that can be run to automate content creation. E.g. `npm run create:blog`.

You can also manually edit content by modifying files in the `content` directory.

### Media Page - Third-Party Article Submission

If you're writing Ethereum Classic content, the [Media Kit](https://github.com/ethereumclassic/Media_Kit) repository holds an abundance of Ethereum Classic brand assets for content creators. Please pretty up those ETC articles with Ethereum Classic specific images, a lot of work went into all those graphics. If you're a graphic designer, please consider contributing to our branding by submitting content to the [Media Kit](https://github.com/ethereumclassic/Media_Kit) repository.

If you'd like to submit an Ethereum Classic related article to the website's Media section, please follow the instructions below. Please do not submit speculative articles like weekly price projections and such. This isn't a place for click bait marketing, but rather reliable articles related to developments in the Ethereum Classic ecosystem. Thank you.

New GitHub contributors can follow this [contribution guide](https://guides.github.com/activities/forking/) to contribute to repositories.

1. Fork this repository to your personal GitHub account.
    - Optional: Clone locally on your machine.
2. Navigate to the file `content/news/media/media.objects.en.yaml`
3. Open `media.en.yaml` to edit
4. Review the existing format of the articles in the file.
5. Add your article to the file. Ensure the formatting is correct. Save your changes.
    - Note: The articles are listed in reverse chronological order with the most recent articles at the top of the document. Please add your article in-line with this order.
6. Make a Pull Request from the active branch in your repo to the `ethereumclassic:master` branch using the big green button.
    - Instructions: [Creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
7. Celebrate. You just contributed to an open source, decentralized blockchain project! 🎉

### Too complicated to contribute directly?

If you're not familiar with GitHub and all of this is too complicated, then you can simply input your content suggestion or news article into a [New Issue](https://github.com/ethereumclassic/ethereumclassic.github.io/issues/new/choose) and another contributor can make a PR for you. Also, you can reach out for help from other contributors in the [discord #ethereumclassicwebsite](https://discord.gg/DwQjJ8) channel.

### Contribute Translations

Ethereum Classic is a global, decentralized project. We need translators for every language. If you'd like to contribute content translations to the project, please join the [discord #dev-website](https://discord.gg/JnmAqGS5sT) channel.

## Deployment

Updates to the `master` branch are automatically built and deployed to [https://ethereumclassic.org/](https://ethereumclassic.org/) via `netlify`. The `master` branch is protected; pull requests must be made against it and approved by 3 contributors.

All other branches will be automatically built and deployed via `netlify`.

For example the `develop` branch can be previewed at https://develop--ethereumclassic.netlify.com/

## Development

This project uses [gatsby](https://www.gatsbyjs.org/) and a custom i18n content management system. More documentation to come.

To run the development mode, clone this repo, run `npm install` followed by `npm start`.

See `package.json` for scripts.

Issues and pull requests are welcome. You can also get an overview of issues on the [project kanban](https://github.com/ethereumclassic/ethereumclassic.github.io/projects/1).

## Old Version

An archived version of the old website can be found at https://github.com/ethereumclassic/ethereumclassic.github.io-v1

## Licenses

Unless otherwise specificed, the content within this repository is CC0 (public domain). Code is MIT.