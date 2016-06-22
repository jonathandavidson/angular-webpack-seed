import 'babel-polyfill';
import angular from 'angular';
import { user } from './module';

require('./index.scss');

angular.module('myApp', []);

angular.
  module('myApp').
  component('greetUser', {
    template: '<p class="hello">Hello, {{$ctrl.user}}!</p>',
    controller: function GreetUserController() {
      this.user = 'world';
    }
  });
