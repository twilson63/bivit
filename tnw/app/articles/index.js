/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'app.articles';
}

(function (window, angular, undefined) {
  angular.module('app.articles', [require('./pouchdb')])
    .config(['$stateProvider', function ($stateProvider) {
       $stateProvider
          .state('articles', {
            url: '/articles',
            abstract: true,
            template: '<div ui-view></div>'
          })
          .state('articles.list', require('./components/list'))
          .state('articles.new', require('./components/new'))
          .state('articles.show', require('./components/show'))
          .state('articles.edit', require('./components/edit'))

     }])
    .factory('articles', ['pouchDB', 'dbName', require('./services').articles])
})( window, window.angular)