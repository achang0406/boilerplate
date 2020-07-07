import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import devConfig from 'Client/webpack.dev.config.js';
import loaders from 'Loaders';

const app = express(),
  DIST_DIR = __dirname,
  ENV = process.env.NODE_ENV || 'development';

if (ENV === 'development') {
  const compiler = webpack(devConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: devConfig.output.publicPath,
    })
  );

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(DIST_DIR));
}

loaders(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
