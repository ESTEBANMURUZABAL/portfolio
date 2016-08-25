'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
    'title': 'Home',
    'state': 'main'
    },
    {
      'title': 'Portfolio',
      'state': 'portfolio'
    },
    {
      'title': 'Blog',
      'state': 'blog'
    },
    {
      'title': 'About',
      'state': 'about'
    },
    {
      'title': 'Contact me',
      'state': 'contact'
    }
  ];



  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('appsApp')
  .controller('NavbarController', NavbarController);
