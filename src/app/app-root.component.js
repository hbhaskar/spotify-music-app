import AppModule from './app.module';

AppModule.component('appRoot', {
  templateUrl: '/src/app/app-root.component.html',
  $routeConfig: [
    { path: '/', component: 'appRoot', name: 'Home'},
    { path: '/results', component: 'appResults', name: 'Results'},
    { path: '/**', redirectTo: ['Home']}
  ]
});