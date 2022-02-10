# Siggraph Website

This repository is an optimized rewrite of our [website](http://cg.cis.upenn.edu/siggraph/main.html) using NextJS along with some other modern frameworks like TailwindCSS.

## Development

Run `yarn` to install dependencies, and then `yarn dev` to spin up a NextJS dev server.

## Deployment

We use __Github Pages__ to deploy a statically exported version of our site. This should work exactly the same as the live server version, unless there are differences in server/client rendering.

Merging into `main` will automatically run `npm run export`, which builds and exports a static version of our site, before publishing using Pages with a configured `BASE_URL`.

If you want to test this static export locally, run `yarn export` and use something like Live Server for VSCode or the npm `serve` package to host the static files in `out/`.
