import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home';
import EditPage from '../views/EditPage';
import SignIn from '../views/SignIn';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    }, {
      path: '/edit',
      name: 'edit',
      component: EditPage
    }, {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});
