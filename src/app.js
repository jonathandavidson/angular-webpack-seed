import 'babel-polyfill';
import angular from 'angular';
import { world } from './example';

require('./index.scss');

angular.module('myApp', []);

angular
  .module('myApp')
  .component('greetUser', {
    template: require('./template.html'),
    controller: function GreetUserController() {
      this.user = world;
    }
  });
