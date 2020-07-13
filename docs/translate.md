# Guide to Contributing Translations

This walkthrough will show you how to contribute translations via Github.

## Prerequisites

You need a github account to be able to submit translations.

## Guide

**Step 1** Fork the repository

Go to https://github.com/ethereumclassic/ethereumclassic.github.io and click the "Fork" button in the top right corner. If you already have an old repo of the same name on your account, delete it and try again.

![Fork](./t_0.png)

**Step 2** Switch to the babel branch

In your newly forked repository at `https://github.com/your_name/ethereumclassic.github.io`, click the list of branches in the top left and change to the `babel` branch.

![Switch Branches](./t_1.png)

**Step 3** Open the file of your chosen language

Open your country code's language file at `content/_i18n/xx.yaml`. If you cannot find your country code please contact a maintainer in the discord channel.

![Open File](./t_2.png)

**Step 4** Add your translations

Click the 'Edit this file' button.

All of the strings on the webstie are auto-translated by default, so you should review the translations and correct them where appropriate. In this file you will see english comments along with the auto-translations. The enligh comments may not be up to date with the website so please compare the most recent (live) version of the website when translating strings.

You must ensure that the indentation remains the same; there are two spaces at the start of each line.

![Translate](./t_3.png)

**Step 5** Commit your changes

It's a good idea to commit your changes frequently to avoid losing progress. You can commit as many times as you like. Commit directly to your `babel` branch.

![Commit](./t_4.png)

**Step 6** Create a Pull Request

Once you are done with translating, you can create a pull request.

From your repository's root on `babel` branch, `https://github.com/your_name/ethereumclassic.github.io/babel`, click "Pull Request".

![Create PR](./t_5.png)

Make sure are merge from `your_name:babel` into `ethereumclassic.github.io:babel`.

![Merge into Babel](./t_6.png)

**Step 7** Confirm the PR

Before confirming, check that the merged updates look accurate.

![Review Changes](./t_7.png)

Create the pull request.

![Confirm PR](./t_8.png)

---

From here, repository maintainers will review your pull reuqest and merge your changes.

Thank you!
