'use strict';

var routes = [
  {
    method: 'GET',
    path: '/karakterklage/{param*}',
    handler: {
      directory: {
        path: 'dist'
      }
    }
  }
];

module.exports = routes;