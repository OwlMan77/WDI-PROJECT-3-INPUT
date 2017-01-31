angular
  .module('clementine')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'usersShowCtrl',
    controllerAs: 'usersShow'
  })
  .state('companyIndex', {
    url: '/companies',
    templateUrl: '/js/views/companies/index.html',
    controller: 'companiesIndexCtrl',
    controllerAs: 'companiesIndex'
  })
  .state('companyNew', {
    url: '/companies/new',
    templateUrl: '/js/views/companies/new.html',
    controller: 'companiesNewCtrl',
    controllerAs: 'companiesNew'
  })
  .state('companyShow', {
    url: '/companies/:id',
    templateUrl: '/js/views/companies/show.html',
    controller: 'companiesShowCtrl',
    controllerAs: 'companiesShow'
  });

  $urlRouterProvider.otherwise('/');
}
