# HTML Fundamentals

## What is HTML?

- Markup language
- HyperText Markup Language
- Instructions for the browser to display content

## Why do we use HTML?

- Human readable
- Quickly parsed by the browser
- It works well and quickly

# What should a HTML layout look like?

```html
<!--Doctype informs the browser of the standard we're using, usually HTML5 -->
<!DOCTYPE html>
<!-- Tells the browser where our html starts and finishes, can set additional attributes like language-->
<html lang="en">
  <!-- Additional information or settings about the website. Including metadata  -->
  <!-- Metadata: information about properties of the document and additional information for SEO -->
  <!-- Links to CSS style sheets -->
  <!-- Often links to JS -->
  <head>
    <!-- Making sure the browser displays text property. UTF8 contains all special characters and a large set of emojis -->
    <meta charset="UTF-8" />
    <!-- Can set instructions for the browser around caching, page refresh etc -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Sets information about the actual usable content of the window on the page. Very important for CSS media queries -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- The thing that appears in the tab in your browser -->
    <title>Document</title>
  </head>
  <!-- Body is where all the actual content goes -->
  <body></body>
</html>
```