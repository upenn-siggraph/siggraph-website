# Siggraph Website

This repository is an optimized rewrite of our [website](http://cg.cis.upenn.edu/siggraph/main.html) using NextJS and Strapi, along with some other modern frameworks like TailwindCSS.

## Dev Setup

Install dependencies.

```
yarn
```

To run development servers:

```
yarn dev
```

The backend Strapi app will need to be set up with some initial dummy data, so head to `localhost:1337/admin` and make an `Event` or two. Make sure to also set the single type `Display Event` to something.

// TODO: get rid of single type, just use next upcoming event

In `Settings > Api Tokens`, create a new (read-only) token and copy that into a `.env.local` file in `apps/frontend`.

Everything should be working now with just a `yarn dev`.

## Deployment

TODO
