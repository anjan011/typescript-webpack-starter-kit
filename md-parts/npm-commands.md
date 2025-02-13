### NPM run commands

Look into the `scripts` section of `package.json` to see all available npm run scripts. Also, you can do `npm run` t see all available run commands.

#### Development packs

- `npm run build` - Generates the ESM version.
- `npm run build:umd` - Generates the UMD version.
- `npm run build:all` - Generates the both ESM and UMD version

#### Production packs

- `npm run build:production` - Generates the ESM version.
- `npm run build:umd:production` - Generates the UMD version.
- `npm run build:all:production` - Generates the both ESM and UMD version

#### Dev server and watch

- `npm run serve` - Runs webpack development server on `127.0.0.1:8088`
- `npm run watch` - Watches for files change and builds the development pack. It's redundant, when you are using the dev serer.

#### PHP Server (If you use it)

- `npm run php:server` - A PHP local server that listens to `127.0.0.1:9000` with current library root directory as document root.

#### Generate `readme.md`

- `npm run build:readme` - Builds the `readme.md` from multiple smaller .md files inside `./md-parts` directory. It used `merge-markdown.js` script using node. Any new md file you create there, needs to added to this JS file's `files` array.

#### NPM package publishing (Optional)

There is one `prepublishOnly` script, that is called when you apply `npm publish` command. This one builds the production version of ESM, UMD bundles, and the styles.mn.css files before attempting to publish on NPM repository.