'use strict';

module.exports = {

  'browserPort'  : 3000,
  'UIPort'       : 3001,
  'serverPort'   : 3002,

  'styles': {
    'src' : 'app/styles/**/*.scss',
    'dest': 'www/css'
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'www/js'
  },
  
  'images': {
    'src' : 'app/images/**/*',
    'dest': 'www/images'
  },
  
  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'www/fonts'
  },
  'lib': {
    'src' : 'app/lib/**/*',
    'dest': 'www/lib'
  },

  'views': {
    'watch': [
      'app/index.html',
      'app/views/**/*.html'
    ],
    'src': 'app/views/**/*.html',
    'dest': 'app/js'
  },

  'gzip': {
    'src': 'www/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'www/',
    'options': {}
  },

  'dist': {
    'root'  : 'www'
  },

  'browserify': {
    'entries'   : ['./app/js/app.js'],
    'bundleName': 'app.js',
    'sourcemap' : true,
    'insertGlobals' : true
  }
};