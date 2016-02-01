var angular = require('angular');
var ionic = require('ionic');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');



//require('ionic-material');
require('./templates');


// angular modules
require('./controllers/_index');
require('./services/_index');
require('./factories/_index');
require('./directives/_index');
require('./filters/_index');

angular.element(document).ready(function() {
    var requires = [
        'ionic',
        //'ionic-material',
        'app.controllers',
        'app.services',
        'app.factories',
        'app.directives',
        'app.filters',
        'templates'
    ];

    window.app = angular.module('app', requires);
    angular.module('app').constant('AppSettings', require('./constants/AppSettings'));

    angular.module('app').config(require('./config/routes'));
    angular.module('app').config(require('./config/config'));

    angular.module('app').run(require('./config/run'));

    angular.bootstrap(document, ['app']);
});