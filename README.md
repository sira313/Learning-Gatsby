# Aflasio 

## Description

<!-- TODO: Add project description here -->

This project was generate by [Gatsby-cli](https://www.npmjs.com/package/gatsby-cli) using following command `gatsby new Learning-Gatsby`. Live demo is available [here](https://learninggatsbyjs.netlify.com/).

## Todo

- [x] Add Bulma support
- [x] Add top navbar
- [ ] Make top navbar sticky when scroll up

## How to

### - Add Bulma support

Install `bulma`, `node-sass` and `gatsby-plugin-sass` as development dependencies

```bash
yarn add -D bulma node-sass gatsby-plugin-sass
```

Add `gatsby-plugin-sass` to `gatsby-config.js` in `plugins` secion

```js
plugins: [
  ...,
  `gatsby-plugin-sass`,
  ...
]
```

Create new folder (folder name can be any) in `src` called `styles` then add new files with name `bulma.scss` and `_all.scss`.

```scss
// bulma.scss

@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=Raleway:200,400&subset=latin-ext');

// Custom variables
$family-primary: 'Raleway', sans-serif;

// -> Colors
$primary: #293e53;

// Base modules
@import '~bulma/sass/utilities/_all';
@import '~bulma/sass/base/_all';

// Components
@import '~bulma/sass/components/navbar';

// Layout
@import '~bulma/sass/layout/hero';

// Elements
@import '~bulma/sass/elements/container';
@import '~bulma/sass/elements/title';

// Grid
@import '~bulma/sass/grid/_all';
```

```scss
// _all.scss

@import './bulma.scss';
```

Edit `gatsby-browser.js` and require the `_all.scss`

```js
require('./src/styles/_all.scss')
```

Test Bulma by editing React element in `index.js`

```js
// index.js

// ...
<section className='hero is-fullheight is-primary'>
  <div className='hero-body'>
    <div className='container has-text-centered'>
      <h1 className='title'>Aflasio</h1>
      <h1 className='subtitle'>Welcome To My Gatsby Site!</h1>
    </div>
  </div>
</section>
// ...
```