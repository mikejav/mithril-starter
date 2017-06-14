# mithril-starter
Provides starter kit for use mithril in convenient way using Webpack, ES6, JSX and SCSS.

## Usage
### Install:
```shell
git clone https://github.com/mikejav/mithril-starter
npm install
```

### Commands:
```shell
npm run dev             # Compiles the app and opens it in a browser with "live reload"
npm run build           # Just compiles the app for production. Outputted code lies in dist directory
```

## Directory Layout:
```shell
├── build/                      # Build scripts
├── config/                     # Configuration files
├── dist/                       # Builded output
├── node_modules/               # 3rd-party libraries and utilities
├── src/                        # Application source code
│   ├── components/             # Shared or generic UI components
│   ├── styles/                 # .scss files (they are included to application by importing them in .js files)
│   ├── static/                 # Files that are copied to build production output (e.g. favicon.ico)
│   └── main.js                 # Application entry point
└── package.json                # The list of project dependencies and NPM scripts
```
