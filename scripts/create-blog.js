const prompts = require('prompts');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

(async () => {
  const { date, title, author, description } = await prompts([
    {
      type: 'text',
      name: 'title',
      message: 'Enter article title',
      validate: t => (t ? true : 'Cannot be blank')
    },
    {
      type: 'text',
      name: 'author',
      message: "Enter author's full name",
      validate: t => (t ? true : 'Cannot be blank')
    },
    {
      type: 'date',
      name: 'date',
      message: 'Enter publish date',
      mask: 'YYYY-MM-DD',
      initial: new Date()
    },
    {
      type: 'text',
      name: 'description',
      message: 'Enter a short description (optional, for search engines)'
    }
  ]);

  const formattedDate = formatDate(date);
  const slug = `${formattedDate}-${slugify(title, { lower: true, strict: true })}`;

  const content = `---
title: ${title}
author: ${author}
date: ${formattedDate}
description: ${description || 'A short description for SEO (or delete this line)'}
linkImage: ./your-image-name-here.jpg
---
Enter your new article's content here! This file supports markdown :)

By the way, you should either remove the \`linkImage\` line above, or add an actual image to this folder. 

The \`linkImage\` is what appears in social media links, but you can also use it in the article itself (along with other relative image links) like so:

![Example image caption](./your-image-name-here.jpg)

Happy authoring!
`;

  const folder = `content/blog/${slug}`;
  const fileName = 'index.en.md';
  const filePath = `${folder}/${fileName}`;
  const fullPath = path.resolve(filePath);

  fs.mkdirSync(folder);
  fs.writeFileSync(fullPath, content);

  console.log(`👉  ${filePath}`);
})();
