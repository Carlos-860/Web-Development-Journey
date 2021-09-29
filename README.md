# Our Web Development Journey

Come join me on this web development journey :airplane: as we unpack all things web :globe_with_meridians:

Throughout this journey we will encounter numerous tools, languages and technologies that make it possible to create simple landing page websites to more complex Ecommerce Store Sites.

## Technologies we will encounter

![HTML Badge](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JS Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery Badge](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Vue.js Badge](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Gatsby Badge](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white)
![Node.js Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Mongo DB Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PHP Badge](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL Badge](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Laravel Badge](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)

![Man sitting on rock surronded by water](https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)


<details>
<summary>Table Contents</summary>

1. HTML


2. CSS


3. Bootstrap


4. Tailwind CSS


5. SCSS


6. JS


7. JSON


8. NPM


9. Vue


10. React


11. Webpack


12. Node.js


13. Express


14. Mongo DB


15. Graph Ql

</details>

## HTML

Topics we will cover: Best practices | Semantic HTML | Forms & Validation | Accessibility | SEO

HTML (**Hyper Text Markup Language**) is the most basic [building block of the web](https://www.w3schools.com/html/html_intro.asp). It is responsible for describing the **structure** of **web pages**. 

[Hyper text](https://devdocs.io/html/ "Brief HTML Definition") refers to links that connect web pages to one another. [Markup](https://devdocs.io/html/) explains to the clients browser how content should be displayed whether as a paragraph, list item or image.

It consists of a number of **elements** (used interchangeably with tags) which [tell browsers how to display the content](https://www.w3schools.com/html/html_intro.asp).


### Structure of HTML tag

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

<br />

<p align="center">
	<img src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="orange plastic blocks on white surface" />
</p>

### Basic HTML Page

```html
<DOCTYPE html>
<html>
	<head>
		<title>Web Page Title</title>
	</head>
	<body>
		<h1>Web Development</h1>
		<p>My very first HTML document!</p>
	</body>
</html>
```

### List of HTML Tags

#### DOCTYPE tag

`<DOCTYPE html>`

The `<DOCTYPE html>` tag defines that the document is an HTML5 document.

#### html tag

`<html></html>`

The `<html>` tag refers to the root element of an HTML page.

#### head tag

`<head></head>`

The `<head>` tag contains meta information about the HTML page.

#### title tag

`<title></title>`

The `<title>` tag displays its content inside a browsers title bar or page tab.

#### body tag

`<body></body>`

The `<body>` tag contains all the visible content that displays on the web page.

#### heading tag(s)
`<h1>Heading 1</h1>`

`<h2>Heading 2</h2>`

`<h3>Heading 3</h3>`

`<h4>Heading 4</h4>`

`<h5>Heading 5</h5>`

`<h6>Heading 6</h6>`

Heading tags are defined from the most important heading `<h1>` to the least important heading `<h6>`.

__Note__ every web page needs only one `<h1>` tag since search engines may penalize you for overusing it.

#### paragraph tag
`<p></p>`

Paragraph tags are defined by `<p>` element.

#### horizontal rule tag
`<hr />` OR `<hr>`

The horizontal rule tag represents a break in the in the HTML page by displaying a horizontal rule.

#### Line Break Tag
`<br>` OR `<br />`

The line break tag represents line break (new line).

#### Bold Tag
`<b></b>`

The bold tag merely defines bold text.

#### Strong Tag
`<strong></strong>`

The strong tag defines its contents with importance as it is ussually also displayed in bold.

#### Italic Tag
`<i></i>`

The italic tag merely defines italized text.

#### Emphasized Tag
`<em></em>`

The emphasized tag defines emphasized text and it is usually displayed in italic.

#### Small Tag
`<small></small>`

The small tag defiens smaller text.

#### Mark Tag
`<mark></mark>`

The mark tag defines text or content that should be highlighted.

#### Deleted Tag
`<del></del>`

The deleted tag defines deleted text which is usually displayed with a line through it.

#### Inserted Tag
`<ins></ins>`

The inserted tag defines inserted text which is usually underlined.

#### Subscript Tag
`<sub></sub>`

The subscript tag defines subscript text which displays half a character below the normal line (used for chemical formulations).

#### Superscript Tag
`<sup></sup>`

The superscript tag defines superscript text which displays half a character above the normal line (used for footnotes).

#### Blockquote Tag
`<blockquote></blockquote>`

The blockquote tag defines a section of quoted text from another source which is usually indented.

#### Quote Tag
`<q></q>`

The quote tag defines a short qoutation which is usually enclosed with quotation marks.

#### Abbreviation Tag
`<abbr></abbr>`

The abbreviation tag defines an abbreviation or an acronym.

#### Address Tag
`<address></address>`

The address tag defines contact information which is usually rendered in italics.

#### Citation Tag `<cite></cite>`

The citation tag defines a reference to a cited creative work which is usually rendered in italic.


## Resources

### Coding Resources

- [w3schools](https://www.w3schools.com/)
- [DevDocs API Documentation](https://devdocs.io/) => Collection of all programming languages documentation and more...
- [OverAPI.com](https://overapi.com/) => Collection of all programming languge cheat sheets

### Image Resources

- [Unsplash](https://unsplash.com/) => Royalty Free stock stock images and photos.

### Font Resources

- [Google Fonts](https://fonts.google.com/) => A library of free and open source font families.

