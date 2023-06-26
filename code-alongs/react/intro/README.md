# React

## What is it?

- Created by facebook/meta
  - Open sourced
  - Facebook still has a large stake
- JS library for creating User Interactions
  - It's just JavaScript
- Based around the idea of a Single Page Application

  - One html file
  - JS takes care of everything else (routing, pages, etc)
  - Does not page reload
  - App like experience in the web

- Uses JSX syntax (JavaScript XML)

  - HTML like syntax
  - It is turned into JavaScript, through a build step
  - Used to mostly be babel and webpack
  - Newer tools like vite and esbuild gaining popularity

- Uses a virtual DOM
  - An in memory representation of the DOM
  - Instead of directly updating the DOM when we change things the virtual DOM is changed
  - React periodically runs a 'diffing' algorithm to check which parts have changed
  - React can **batch** DOM updates, can provide much faster repaint performance

## Tooling

- Create React App
  - Maintaned by Meta
  - Most people's starting point with React
  - Comes with lots of config
- Vite
  - Faster build and load times
  - Uses modules
  - More config