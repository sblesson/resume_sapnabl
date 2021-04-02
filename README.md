# sapna-blesson-resume

Gatsby.js V2 starter template based on Resume by startbootstrap

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

Check online preview [here](https://anubhavsrivastava.github.io/sapna-blesson-resume/)

## Screenshot

![Screenshot](./src/assets/img/demo.png)

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/sblesson/sapna-blesson-resume
```

Then you can run it by:

```sh
cd gatsby-example-site
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Resume', // <title>
  ...
  firstName: 'Sapna',
  lastName: 'Blesson',
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/sblesson',
    }
    ...
  ],
};

```

#### Changing Theme Colour

To change theme colour, change `$primary` variable in `src/assets/sass/_variables.scss`.

### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

### Checkout other similar starters

- [gatsby-starter-casual](https://github.com/sblesson/gatsby-starter-casual)
- [gatsby-starter-grayscale](https://github.com/sblesson/gatsby-starter-grayscale)
- [gatsby-starter-spectral](https://github.com/sblesson/gatsby-starter-spectral)
- [gatsby-starter-newage](https://github.com/sblesson/gatsby-starter-newage)
- [gatsby-starter-stylish](https://github.com/sblesson/gatsby-starter-stylish)
- [gatsby-starter-solidstate](https://github.com/sblesson/gatsby-starter-solidstate)
- [gatsby-starter-readonly](https://github.com/sblesson/gatsby-starter-readonly)
- [gatsby-starter-prologue](https://github.com/sblesson/gatsby-starter-prologue)
- [gatsby-starter-phantom](https://github.com/sblesson/gatsby-starter-phantom)
- [gatsby-starter-paradigmshift](https://github.com/sblesson/gatsby-starter-paradigmshift)
- [gatsby-starter-overflow](https://github.com/sblesson/gatsby-starter-overflow)
- [gatsby-starter-multiverse](https://github.com/sblesson/gatsby-starter-multiverse)
- [gatsby-starter-identity](https://github.com/sblesson/gatsby-starter-identity)
- [gatsby-starter-highlights](https://github.com/sblesson/gatsby-starter-highlights)
- [gatsby-starter-fractal](https://github.com/sblesson/gatsby-starter-fractal)
- [gatsby-starter-eventually](https://github.com/sblesson/gatsby-starter-eventually)
- [gatsby-starter-directive](https://github.com/sblesson/gatsby-starter-directive)
- [gatsby-starter-creative](https://github.com/sblesson/gatsby-starter-creative)
- [gatsby-starter-aerial](https://github.com/sblesson/gatsby-starter-aerial)

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
