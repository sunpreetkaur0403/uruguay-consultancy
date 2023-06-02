# SASS/SCSS - Introduction

## What is SASS?

- Stylisticly Awesome Style Sheets
- Sass is a **superset** of CSS
  - All css is valid sass/scss code
  - But there's also more language features

## What is SCSS

- Sassy Cascading Style Sheet
- SASS is the framework, .scss is the file extension
- Sass compiles `.scss` files into `.css` files for us that we can run in the browser

## Installation

- There are a number of ways to install but the easiest and most universal is to use the nodejs version

```bash
npm install -g sass
```

## Usage

```bash
sass example.scss:style.css
```

This takes the `example.scss` file and compiles it into `style.css`. This will compile when the command runs

```bash
sass --watch example.scss:style.css
```

This will recompile every time `example.css` is changed.

We could even watch entire folders with a command like

```bash
sass --watch app/sass:public/stylesheets
```

###

```css
p {
  color: orange;
}

/* all text inside sections to be arial */
section {
  font-family: Arial, Helvetica, sans-serif;
}

section p {
  color: blue;
}
/* all paragraphs inside sections to be blue */

/* all spans inside paragraphs inside sections to be bold */
section p span {
  font-weight: bold;
}
```

versus

```scss
section {
  font-family: Arial, Helvetica, sans-serif;
  p {
    color: blue;
    span {
      font-weight: bold;
    }
  }
}
```

or

```css
.btn {
  background-color: rebeccapurple;
  cursor: pointer;
  color: white;
}

.btn:hover {
  background-color: white;
  border: 2px solid rebeccapurple;
  color: rebeccapurple;
  transition: 0.1s;
}
```

versus

```scss
.btn {
  background-color: rebeccapurple;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: white;
    border: 2px solid rebeccapurple;
    color: rebeccapurple;
    transition: 0.1s;
  }
}
```

Now the hover for the `btn` class is contained within that class

## What are the benefits

Some of the things we can do with SASS/SCSS that we can't do in regular css include

- Nesting
- Variables (technically are in css now but scss handles them better)
- Functions
- Mixins
- Modules/partials
- Much easier handling of media queries

## Why do we use SASS?

- There is likely no perfomance gain. All things being equal the result on the page is exactly the same
- This is a tool for developer experience
  - We can split our code up which makes it easier to think about
  - We can use variables which give us a single source of truth
  - We can use functions/mixins to avoid repeating ourselves and also to have a single source of truth

## Resources

[Sass docs ](https://sass-lang.com/)