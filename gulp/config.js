var clientName        = "Ocupop";
var src               = 'src';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'src/_assets';
var buildAssets       = 'build/assets';
var bowerAssets       = 'bower_components';
var productionAssets  = 'build/production/assets';
var developmentAssets = 'src/assets';

module.exports = {
  bower: {
    debugging: true,
    includeDev: true,
    dest: srcAssets + '/vendor',
    paths: {
      bowerDirectory: bowerAssets,
      bowerrc: './.bowerrc',
      bowerJson: './bower.json'
    }
  },
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src],
        serveStaticOptions: {
          extensions: ['html']
        }
      },
      port: 9999,
      files: [
        buildAssets + '/css/*.css',
        buildAssets + '/js/*.js',
        buildAssets + '/img/**',
        buildAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998
    }
  },
  delete: {
    src: [buildAssets, developmentAssets]
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml,_config.development.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.production.yml'
    }
  },
  sass: {
    src:   srcAssets + '/scss/**/*.{sass,scss}',
    dest:  developmentAssets + '/css',
    build: buildAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true
    }
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/scripts/main.js',
      dest:       developmentAssets + '/js',
      build:      buildAssets + '/js',
      outputName: 'main.js'
    }, {
      entries:    './' + srcAssets + '/scripts/head.js',
      dest:       developmentAssets + '/js',
      build:      buildAssets + '/js',
      outputName: 'head.js'
    }]
  },
  images: {
    src:  srcAssets + '/img/**/*',
    dest: developmentAssets + '/img',
    build: buildAssets + '/img'
  },
  sprites: {
    src: srcAssets + '/svg/**/*.svg',
    dest: src,
    options: {
      shape: {
        dimension: {     // Set maximum dimensions
          maxWidth: 32,
          maxHeight: 32
        },
        spacing: {
          padding: 10     // Add padding
        }
      },
      mode: {
        css: {
          dest: './',
          layout: 'diagonal',
          sprite: '_assets/img/sprite.svg',
          bust: false,
          render: {
            scss: {
              dest: '_assets/scss/_sprite.scss',
              template: 'resources/templates/_sprite_template.scss'
            }
          }
        }
      }
    }
  },
  // sprites: {
  //   src: srcAssets + '/svg/*.svg',
  //   dest: src,
  //   options: {
  //     mode: 'symbols',
  //     baseSize: 16,
  //     selector: "%f",
  //     layout: 'diagonal',
  //     svgId: "svg-%f",
  //     cssFile:  '_assets/scss/_sprite.scss',
  //     svgPath: '/assets/svg/%f',
  //     pngPath: '/assets/png/%f',
  //     svg: {
  //       sprite: "_assets/img/sprite.svg",
  //       defs: "_assets/img/defs.svg",
  //       symbols: "_assets/img/symbols.svg"
  //     },
  //     preview: {
  //       sprite: 'docs/sprite.html',
  //       defs: 'docs/defs.html',
  //       symbols: 'docs/symbols.html'
  //     },
  //     templates: {
  //       css: require("fs").readFileSync('resources/templates/_sprites_template.scss', "utf-8")
  //     }
  //   }
  // },
  iconfonts: {
    fontName: clientName,
    src:  srcAssets + '/icons/*',
    dest: srcAssets + '/fonts'
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: buildAssets + '/fonts'
    },
    production: {
      src:  buildAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },
  modernizr: {
    src: srcAssets +'/scripts/*.js',
    dest: srcAssets + '/vendor'
  },
  optimize: {
    css: {
      src:  buildAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {}
    },
    js: {
      src:  buildAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  buildAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progessive: true,
        interlaced: true
      }
    }
  },
  base64: {
    src: buildAssets + '/css/*.css',
    dest: buildAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      // '!' + srcAssets + '/scss/base/_sprites.scss'
      ],
      options: {
        bundleExec: true
      }
  },
  jshint: {
    src: srcAssets + '/scripts/*.js'
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/img/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  watch: {
    jekyll: [
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
      src + '/*'
    ],
    sass: srcAssets + '/scss/**/*',
    styles:  srcAssets + '/styles/**/*.css',
    scripts: srcAssets + '/scripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    sprites: [
      srcAssets + '/svg/**/*.svg',
      src + '/docs/_templates/*',
    ],
    svg:     'vectors/*.svg'
  }
};