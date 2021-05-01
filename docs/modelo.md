---
id: doc-markdown
title: Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /modelo
---

## Markdown headers

Markdown documents can use the following markdown frontmatter metadata fields, enclosed by a line `---` on either side:

- `id`: A unique document id. If this field is not present, the document's `id` will default to its file name (without the extension)
- `title`: The title of your document. If this field is not present, the document's `title` will default to its `id`
- `hide_title`: Whether to hide the title at the top of the doc. By default it is `false`
- `hide_table_of_contents`: Whether to hide the table of contents to the right. By default it is `false`
- `sidebar_label`: The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's `sidebar_label` will default to its `title`
- `custom_edit_url`: The URL for editing this document. If this field is not present, the document's edit URL will fall back to `editUrl` from options fields passed to `docusaurus-plugin-content-docs`
- `keywords`: Keywords meta tag for the document page, for search engines
- `description`: The description of your document, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. If this field is not present, it will default to the first line of the contents
- `image`: Cover or thumbnail image that will be used when displaying the link to your post
- `slug`: Allows to customize the document url

Example:

```yml
---
id: doc-markdown
title: Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /myDoc
---
My Document Markdown content
```


<details><summary>Exemplos</summary>
<p>

```js title=Exemplo
// ES5
var x = function(x, y) {
    return x * y;
}
```
</p>
</details>  
<br />