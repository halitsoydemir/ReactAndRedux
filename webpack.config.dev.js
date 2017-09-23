import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,//debug bilgileri için
  devtool: 'inline-source-map',
  noInfo: false,//webpack bunldle ettiklerinin isimlerini console'a yazmaması için
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'src/index')//yarattıgımız index.js dosyası
  ],
  target: 'web', //dosyasıların auto bundle olabılmesı ıcın web projesı oldugunu belırtırız, yoksa normal node app te olabılır
  output: {//developmentta dosya olusturmaz path'i olusturur, çünkü memoryde olusur
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')//code 'un nerede olduğunu belirtiyoruz'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //full browser refresh etmeden, module değiştirmeye yarar
    new webpack.NoErrorsPlugin()//hotreloading fail hata yerine, daha okunaklı error verir gibi birşey.s
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}, //js fileları al
      {test: /(\.css)$/, loaders: ['style', 'css']},//cssleri al, less falan olanlarıda ekleyebiliriz
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
