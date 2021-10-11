<h1><img alt="HTML5" width="35px" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg" /> HTML</h1>

Topics we will cover: Best practices | Semantic HTML | Forms & Validation | Accessibility | SEO

## Table of Contents
1. [Structure of HTML tags](#structure-of-html-tags)

2. [Structure of HTML attributes](#structure-of-html-attributes)

3. [Common HTML tags for your websites](common-html-tags-for-your-websites)

4. [Frequently Asked Questions about HTML]()

5. [HTML Resources & Tools](#html-resources--tools)

## 1. Structure of HTML tags
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

## 2. Structure of HTML Attributes
All HTML elements can have attributes that provide additional information about elements.

HTML attributes come in name/value pairs.
```html
name="value"
```
Example
```html
<img src="" alt="" />
```

## 3. Common HTML tags for your websites

### Page Structure Tags

|Element Name|Element Markup|Element Description|
|---|---|---|
|doctype tag|`<DOCTYPE html>`|The `<DOCTYPE html>`tag defines that the document is an HTML5 document.|
|html tag|`<html>`|The `<html>` tag refers to the root element of an HTML page.|
|head tag|`<head>`|The `<head>` tag contains meta information about the HTML page.|
|title tag|`<title>`|The `<title>` tag displays its content inside a browsers title bar or page tab.|
|body tag|`<body>`|The `<body>` tag contains all the visible content that displays on the web page.|

### Content & Web Page Formatting Tags

|Element Name|Element Markup|Element Description|
|---|---|---|
|heading tag(s)|`<h1>` - `<h6>`|Heading tags range form the most important heading `<h1>` to the least important heading `<h6>`.|
|paragraph tag|`<p>`|Paragraph tags are defined by `<p>` element.|
|horizontal rule tag|`<hr />`|The `<hr />` tag represents a break in the in the HTML page by displaying a horizontal rule.|
|line break tag|`<br />`|The `<br />` tag represents line break (new line).|
|div tag|`<div>`|The `<div>` tag is used as a container for other HTML elements.|
|span tag|`<span>`|The `<span>` tag is an inline container used to mark up a part of a text.|

### Text Formatting Tags

|Element Name|Element Markup|Element Description|
|---|---|---|
|strong tag|`<strong>`|The `<strong>` tag defines its contents with importance as it is usually also displayed in bold.|
|emphasized tag|`<em>`|The `<em> `tag defines emphasized text and it is usually displayed in italic.|
|small tag|`<small>`|The `<small>` tag defines smaller text.|
|superscript tag|`<sup>`|The `<sup>`tag defines superscript text which displays half a character above the normal line (used for footnotes).|
|blockquote tag|`<blockquote>`|The `<blockquote>` tag defines a section of quoted text from another source which is usually indented.|
|quote tag|`<q>`|The `<q>` tag defines a short qoutation which is usually enclosed with quotation marks.
|address tag|`<address>`|The `<address>` tag defines contact information which is usually rendered in italics.|
|cite tag|`<cite>`|The `<cite>` tag defines a reference to a cited creative work which is usually rendered in italic.|

For a  in-depth list of HTML tags, make sure you check out [w3schools HTML Tag References](https://www.w3schools.com/tags/default.asp) web page.

## 4. Frequently Asked Questions about HTML

### Inline Elements vs Block-level Elements

### Semantic markup

### HTML accessibility


For more information on accessibitlity, have a look at [w3schools accessibility tutorial](https://www.w3schools.com/accessibility/index.php).

### HTML Client Side Validition


## 5. HTML Resources & Tools

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