<h1>HTML <img align="left" alt="HTML5" width="35px" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg" /></h1>

Topics we will cover: Best practices | Semantic HTML | Forms & Validation | Accessibility | SEO

## Table of Contents
1.[Structure of HTML tags](#structure-of-html-tags)
2.[Structure of HTML attributes](#structure-of-html-attributes)
3.[Common HTML tags for your websites](common-html-tags-for-your-websites)
4.[Frequently Asked Questions about HTML]()
<!--- 5.List of HTML tags -->
6.[HTML Resources & Tools](#html-resources--tools)


## Structure of HTML tags
Generally, HTML tags are defined by a start tag, some content and an end tag.
```html
<tagname>content</tagname>
```
Example
```html
<p>This is a paragraph tag.</p>
```
<br />

*Exception* certain HTML tags do not have a closing tag and hence, are referred to as [empty tags](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).
```html
<tagname />
```
Example 
```html
<br />
```

## Structure of HTML Attributes
All HTML elements can have attributes that provide additional information about elements.

HTML attributes come in name/value pairs.
```html
name="value"
```
Example
```html
<img src="" alt="" />
```

## Common HTML tags for your websites

|Element Name|Element Markup|Element Description|


|Element Name|Element Markup|Element Description|
|---|---|---|
|doctype tag|`<DOCTYPE html>`|The `<DOCTYPE html>`tag defines that the document is an HTML5 document.|
|html tag|`<html></html>`|The `<html>` tag refers to the root element of an HTML page.|
|   |   |   |

Doctype Tag 	`<DOCTYPE html>`
- The `<DOCTYPE html>`tag defines that the document is an HTML5 document.
<br />

Html Tag 	`<html>`
- The `<html>` tag refers to the root element of an HTML page.
<br />

Head tag	`<head>`
- The `<head>` tag contains meta information about the HTML page.
<br/>

Title tag 	`<title>`
- The `<title>` tag displays its content inside a browsers title bar or page tab.
<br />

Body tag 	`<body>`
- The `<body>` tag contains all the visible content that displays on the web page.
<br />

Heading Tag(s) `<h1> - <h6>`
- Heading tags are defined from the most important heading `<h1>` to the least important heading `<h6>`.
```html
<h1>Heading 1</h1>

<h2>Heading 2</h2>

<h3>Heading 3</h3>

<h4>Heading 4</h4>

<h5>Heading 5</h5>

<h6>Heading 6</h6>
```
- Every web page should only comprise of one `<h1>` tag since search engines may penalize you for overusing it.
<br />

Paragraph tag 	`<p>`
- Paragraph tags are defined by `<p>` element.
<br />

Horizontal Rule Tag `<hr />`
- The `<hr />` tag represents a break in the in the HTML page by displaying a horizontal rule.
<br />

Line Break Tag 	`<br>` OR `<br />`
- The `<br />` tag represents line break (new line).
<br />

Strong Tag 	`<strong>`
- The strong tag defines its contents with importance as it is usually also displayed in bold.
<br />

Emphasized Tag 	`<em>`
- The emphasized tag defines emphasized text and it is usually displayed in italic.
<br />

Small Tag 	`<small>`
- The small tag defines smaller text.
<br />

Superscript Tag `<sup>`
- The superscript tag defines superscript text which displays half a character above the normal line (used for footnotes).
<br />

Blockquote Tag 	`<blockquote>`
- The blockquote tag defines a section of quoted text from another source which is usually indented.
<br />

Quote Tag 	`<q>`
- The quote tag defines a short qoutation which is usually enclosed with quotation marks.
<br />

Address Tag 	`<address>`
- The address tag defines contact information which is usually rendered in italics.
<br />

Cite tag 	`<cite>`
- The `<cite>` tag defines a reference to a cited creative work which is usually rendered in italic.
<br />

## Frequently Asked Questions about HTML

#### 

## HTML Resources & Tools

### HTML Learning Resources

#### HTML Books
- [HTML5 Notes for Professionals](https://books.goalkicker.com/HTML5Book/) => HTML5 notes compiled from Stack Overflow documentation.
- [HTML5 Canvas Notes for Professionals](https://books.goalkicker.com/HTML5CanvasBook/) => HTML5 Canvas notes compiled from Stack Overflow documentation.

#### HTML Videos
- [HTML Crash Course](https://www.youtube.com/watch?v=UB1O30fR-EE&t=7s) => A simple and yet effective HTML Crash Course for any Web Developer.

### HTML Cheatsheet
- [Codecademy Learn HTML Cheetsheet](https://www.codecademy.com/learn/learn-html/modules/learn-html-elements/cheatsheet) => A well structured and cheatsheet on  HTML.
- [HTML Cheatsheet](https://htmlcheatsheet.com/) => An interactive HTML Cheatsheet.

### HTML Validators
- [W3C](https://validator.w3.org/) => Checks markup of HTML web documents.
- [FREEFORMATTER.COM](https://www.freeformatter.com/html-validator.html) => Validates HTML files.
- [FREEFORMATTER.COM](https://www.freeformatter.com/html-formatter.html) => Formats HTML files to your desired text indention.

### Code Editor Extenstions
- [Emmet](https://emmet.io/):heart: => Code Editor extention that improves your HTML workflow.
- [HTML End Tag Labels](https://marketplace.visualstudio.com/items?itemName=anteprimorac.html-end-tag-labels) => Labels HTML end tags code editors.
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) => Automatically closes HTML end tags.
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) => Automatically renames paired HTML tags.
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) => Allows you to create more user friendly code.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):heart: => Code formatter.