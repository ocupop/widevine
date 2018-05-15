const path        = require('path');
const webpack     = require('webpack');
const clientName  = 'Widevine';
const src         = 'src';
const dest        = '_site';
const assets      = 'src/assets';

module.exports = {
  tasks: {
    webpack:  true,
    imagemin: true,
    sass:     true,
    jekyll:   true,
    // eslint:   true,
    watch:    true,
    // browsersync: true,
  },

  assets: assets,
  
  autoprefixer: {
    browsers: [
      '> 1%',
      'last 2 versions',
      'Firefox ESR',
    ],
    cascade: true,
  },

  browsersync: {
    port: 9999,
    server: {
      baseDir: [dest],
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    browser: 'default',
      // [
      //   "Google Chrome Canary",
      //   "Google Chrome",
      //   "Firefox Nightly",
      //   "Firefox Developer Edition",
      //   "Firefox",
      //   "Safari Technology Preview",
      //   "Safari",
      //   "Opera",
      //   "Opera Developer",
      // ],
    cors: true,
    reloadOnRestart: true,
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config.development.yml',
      production: '_config.production.yml',
    },
    src: src,
    dest: dest,
    watch: [
      '_config.yml',
      '_config.development.yml',
      '_config.production.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*',
      assets + '/js/**/*',
      assets + '/css/**/*',
      assets + '/img/**/*',
    ]
  },

  sass: {
    src: assets + '/_scss/**/*.scss',
    dest: assets + '/css',
    options: {
      outputStyle:  'compressed',
    },
    watch: [
      assets + '/_scss/**/*',
    ]
  },

  imagemin: {
    src: assets + '/_img/**/*',
    dest: assets + '/img',
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
  },

  js: {
    src: assets + '/_js/**/*.js',
    dest: assets + '/js',
    entry: [
      assets + '/_js/head.js',
      assets + '/_js/main.js',
    ],
  },

  webpack: {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true
            },
          }
        },
        {
          test: require.resolve('jquery'),
          use: [
            {
              loader: 'expose-loader',
              options: '$'
            },
            {
              loader: 'expose-loader',
              options: 'jQuery'
            }
          ]
        }
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        // In case you want to import plugins individually, you must also require them here:
        // Util: "exports-loader?Util!bootstrap/js/dist/util",
        // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      })
    ],
  },

  eslintLoader: {
    enforce: "pre",
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "eslint-loader",
  },

  scsslint: {
    src: [
      assets + '/_scss/**/*.{sass,scss}'
    ],
    options: {
      bundleExec: true,
      config: './scss-lint.yml'
    }
  },
}
