`npm run dev` starts the dev server at `localhost:8000`, you'll see the dutch date.

Running `npm run build` and opening the index.html will give you the english date, although we've set locale to `nl`.

If you unquote `// import 'moment/locale/nl';` and run build again, the dutch locale will have been included.

If you ask me, Webpack 2 treeshaking is dropping all the unused code, including all locale files.
