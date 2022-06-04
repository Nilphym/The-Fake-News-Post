# The Fake News Post

API Deploy on [Heroku.com](https://the-fake-news-post.herokuapp.com/).
Client Deploy on [Netlify.com](https://the-fake-news-post.netlify.app/).

### Apps and Packages

-   `@fake-news/api`: [Nest.js](https://nestjs.com/) app
-   `@fake-news/client`: [React.js](https://reactjs.org) app
-   `@fake-news/common`: library with code shared between `api` and `client` (TypeORM schema definitions, DTOs)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```

## Useful Links

Learn more about the power of Turborepo:

-   [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
-   [Caching](https://turborepo.org/docs/core-concepts/caching)
-   [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
-   [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
-   [Configuration Options](https://turborepo.org/docs/reference/configuration)
-   [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
