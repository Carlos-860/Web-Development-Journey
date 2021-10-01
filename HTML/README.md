# HTML ![HTML Badge](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)

Topics we will cover: Best practices | Semantic HTML | Forms & Validation | Accessibility | SEO

HTML (**Hyper Text Markup Language**) is the most basic [building block of the web](https://www.w3schools.com/html/html_intro.asp). It is responsible for describing the **structure** of **web pages**. 

<details>
<summary>Table of Contents</summary>

1. Structure of HTML Tags


2. Structure of HTML Attributes


3. List of HTML Tags
	1. DOCTYPE


</details>

## Structure of HTML tag

Generally, HTML tags are defined by a start tag, some content and an end tag.

`<tagname>content</tagname>`

- Example
```html
<p>This is a paragraph tag.</p>
```

<br />

*Exception* certain HTML tags do not have a closing tag and hence, are referred to as [empty tags](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

`<tagname />`

- Example 
```html
<br />
```

## Structure of HTML Attributes


## List of HTML Tags

### DOCTYPE tag

`<DOCTYPE html>`

The `<DOCTYPE html>` tag defines that the document is an HTML5 document.


### html tag

`<html></html>`

The `<html>` tag refers to the root element of an HTML page.


### head tag

`<head></head>`

The `<head>` tag contains meta information about the HTML page.

### title tag

`<title></title>`

The `<title>` tag displays its content inside a browsers title bar or page tab.

### body tag

`<body></body>`

The `<body>` tag contains all the visible content that displays on the web page.

### heading tag(s)
`<h1>Heading 1</h1>`

`<h2>Heading 2</h2>`

`<h3>Heading 3</h3>`

`<h4>Heading 4</h4>`

`<h5>Heading 5</h5>`

`<h6>Heading 6</h6>`

Heading tags are defined from the most important heading `<h1>` to the least important heading `<h6>`.

__Note__ every web page needs only one `<h1>` tag since search engines may penalize you for overusing it.

### paragraph tag
`<p></p>`

Paragraph tags are defined by `<p>` element.

### horizontal rule tag
`<hr />` OR `<hr>`

The horizontal rule tag represents a break in the in the HTML page by displaying a horizontal rule.

### Line Break Tag
`<br>` OR `<br />`

The line break tag represents line break (new line).

### Bold Tag
`<b></b>`

The bold tag merely defines bold text.

### Strong Tag
`<strong></strong>`

The strong tag defines its contents with importance as it is ussually also displayed in bold.

### Italic Tag
`<i></i>`

The italic tag merely defines italized text.

### Emphasized Tag
`<em></em>`

The emphasized tag defines emphasized text and it is usually displayed in italic.

### Small Tag
`<small></small>`

The small tag defiens smaller text.

### Mark Tag
`<mark></mark>`

The mark tag defines text or content that should be highlighted.

### Deleted Tag
`<del></del>`

The deleted tag defines deleted text which is usually displayed with a line through it.

### Inserted Tag
`<ins></ins>`

The inserted tag defines inserted text which is usually underlined.

### Subscript Tag
`<sub></sub>`

The subscript tag defines subscript text which displays half a character below the normal line (used for chemical formulations).

### Superscript Tag
`<sup></sup>`

The superscript tag defines superscript text which displays half a character above the normal line (used for footnotes).

### Blockquote Tag 
`<blockquote></blockquote>`

The blockquote tag defines a section of quoted text from another source which is usually indented.

### Quote Tag
`<q></q>`

The quote tag defines a short qoutation which is usually enclosed with quotation marks.


### Quote Tag




### Abbreviation Tag `Text Formatting`
<details>
<summary>
<code>&lt;abbr&gt;&lt/abbr&gt;</code>
</summary>
<ul>
<li>The abbreviation tag defines an abbreviation or an acronym.</li>
</ul>
</details>

### Address Tag
<details>
<summary>
<code>&lt;address&gt;&lt/address&gt;</code>
</summary>
<ul>
<li>The address tag defines contact information which is usually rendered in italics.</li>
</ul>
</details>

### Bi-Directional Tag
<details>
<summary>
<code>&lt;bdo&gt;&lt/bdo&gt;</code>
</summary>
<ul>
<li>The bi-directional overide tag is used to overide the default text direction.</li>
</ul>
</details>

### Citation Tag
<details>
<summary>
<code>&lt;cite&gt;&lt/cite&gt;</code>
</summary>
<ul>
<li>The citation tag defines a reference to a cited creative work which is usually rendered in italic.</li>
</ul>
</details>

## HTML Resources & Tools

### HTML Validators
- [W3c](https://validator.w3.org/) => Checks markup of HTML web documents.
- [FREEFORMATTER.COM](https://www.freeformatter.com/html-validator.html) => Validates HTML files.
- [FREEFORMATTER.COM](https://www.freeformatter.com/html-formatter.html) => Formats HTML files to your desired text indention.

### Code Editor Extenstions
- [Emmet](https://emmet.io/) => Code Editor extention that improves your HTML workflow.
- [HTML End Tag Labels](https://marketplace.visualstudio.com/items?itemName=anteprimorac.html-end-tag-labels) => Labels HTML end tags code editors.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) => Automatically closes HTML end tags.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) => Automatically renames paired HTML tags.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) => Allows you to create more user friendly code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) => Code formatter.