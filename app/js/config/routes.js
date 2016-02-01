'use strict';

/**
 * @ngInject
 */
function routes($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'layout/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'layout/tab-dash.html',
                    //controller: 'DashCtrl'
                }
            }
        })
        .state('tab.bags', {
            url: '/bags',
            views: {
                'tab-bags': {
                    templateUrl: 'layout/tab-bags.html',
                    //controller: 'BagCtrl'
                }
            }
        })
        .state('tab.cats', {
            url: '/cats',
            views: {
                'tab-cats': {
                    templateUrl: 'layout/tab-cats.html',
                    controller: 'catCtrl'
                }
            }
        })


    .state('tab.account', {
        url: '/account',
        views: {
            'tab-account': {
                templateUrl: 'layout/tab-account.html',
                //controller: 'AccountCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');
}

module.exports = routes;
