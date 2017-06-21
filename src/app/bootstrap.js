import angular from  'angular';
import ngcomponentrouter from 'ngcomponentrouter';

import AppModule from './app.module';
import './app-root.component';
import './results/app-results.component';

angular.element(document).ready(() => {
    // bootstrap angular now that all modules have been loaded
    angular.bootstrap(document, [AppModule.name], {strictDi: true});  
});