'use strict';

angular.module('appsApp.auth', [
  'appsApp.constants',
  'appsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
