# example-webpack-js

Proyecto de ejemplo de configuración de Webpack 5.

Referencias:

- <https://webpack.js.org/guides/getting-started/>
- <https://webpack.js.org/configuration/>

Comandos para generar el proyecto:

- npm install -D webpack-cli
- npm install -D @webpack-cli/generators
- npx webpack init

Opciones:

```text
? Which of the following JS solutions do you want to use? ES6
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? No
? Which of the following CSS solutions do you want to use? CSS only
? Will you be using PostCSS in your project? No
? Do you want to extract CSS for every file? Only for Production
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: npm
? Overwrite package.json? overwrite
```

Ajustes realizados en el proyecto:

- cambio de carpeta de output a 'docs', para compatibilidad con github docs.
- cambio en npm run de serve a dev.
- habilitación de assets
- habilitación de hash en nombre de archivo en build para css y js

Comandos

- npm install
- npm run dev
- npm run build
