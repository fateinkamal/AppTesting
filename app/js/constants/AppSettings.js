'use strict';

var AppSettings = {
    appTitle: 'ECOGIV',
    SiteID: "560dedcec783800c585f01e7",
    API: "http://api.ecogiv.commerce.asia/",
    CDN: "http://cdn.commerce.asia/s3/enabling-commerce/ecogiv",
    Version: "1.1",
    AUTH_EVENTS: {
        authenticated: 'auth-authenticated',
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logout: 'auth-logout',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    },
    PAGE_EVENTS: {
        changes: 'page-changed'
    }
};

module.exports = AppSettings;
