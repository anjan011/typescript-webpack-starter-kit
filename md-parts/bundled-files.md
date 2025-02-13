### Bundled files

Bundled JS files following these format - 

- `bundle.dev.min.{type}.js` - that is `bundle.dev.min.esm.js` and `bundle.dev.min.umd.js`. Do note that, when you run webpack dev server, only ESM dev version is generated. If you need umd version, then please run `npm run build:umd`

- `bundle.min.{type}.js` for production versions. Same rules apply as above.

- `styles.min.css` - All css files are combined into this.