import angular from  'angular';
import ngcomponentrouter from 'ngcomponentrouter';

let module = angular.module('app', [ngcomponentrouter]);

module.value('$routerRootComponent', 'appRoot');

export default module;