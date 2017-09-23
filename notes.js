package.json
  "script":{
    "start":"babel-node tools/srcServer.js"
    /*babel node kullandık compile işlemi için çünkü içerisinde ES6 kullandık,nodejs yerine mi?*/
  },
  -
  "lint":"node_modules/.bin/esw webpack.config.* src tools"
  esw yeri for file watching,
  webpack.config dosyalarını kontrol et,src altındakileri et,tools altındakileri et

  "lint":"node_modules/.bin/esw webpack.config.* src tools"
  normalde lint metodu watch etmez dosyları o yüzden
  "lint:watch":"npm run lint -- --watch"
  bunu ekledik sync olarak consoleda sonucu goruyoruz, npm run lint:watch dediğimizde

  "start":"npm-run-all --parallel open:src lint:watch",
  npm-run-all tüm script larındakileri paralel olarak çalıştırır

***
.babelrc
{
  "presets": ["react", "es2015"],
  /*react ve es15 presetlerini kullandık*/
  "env": {
    "development": {
      "presets": ["react-hmre"]
      /*birçok hotreloading kodu alır ve paket haline getirir, bunu development için ekledik,package.jsonda dev dependenciesde de bulunur*/
    }
  }
}

***
.eslintrc
"rules": {
  "quotes": 0,
  "no-console": 1,
  "no-debugger": 1,
  "no-var": 1,
  0=>off
  1=>warning
  2=>error
***

var HelloWorld = React.createClass({
  render:function () {
    return(
      <h1>Hello World</h1>
    );
  }
});

****
