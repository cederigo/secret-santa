# Secret Santa, Kris Kringel, Wichteln

Host your own secret santa https://en.m.wikipedia.org/wiki/Secret_Santa

Powered by https://svelte.dev

## Prerequisites
- nodejs

## Get started

1. `npm install`
1. Edit santa.config.js
1. `npm run santa`
1. `npm run build`
1. See `Deploying to the web` section
1. Send the links printed in step 3 to your family, friends or collegues

## Customize

Edit App.svelte to your desire.

- `npm run dev` for a local dev server

## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
