import App from '../App';
import Vue from 'vue';
import Router from 'vue-router';
const login = r => require.ensure([], () => r(require('../components/login/login')), 'login');
const register = r => require.ensure([], () => r(require('../components/register/register')), 'register');
const forgetcode = r => require.ensure([], () => r(require('../components/forgetcode/forgetcode')), 'forgetcode');
const homepage = r => require.ensure([], () => r(require('../components/homepage/homepage')), 'homepage');
const classification = r => require.ensure([], () => r(require('../components/classification/classification')), 'classification');
const order = r => require.ensure([], () => r(require('../components/order/order')), 'order');
const profile = r => require.ensure([], () => r(require('../components/profile/profile')), 'profile');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/homepage'
        },
        {
          path: '/homepage',
          name: 'homepage',
          component: homepage
        },
        {
          path: '/classification',
          name: 'classification',
          component: classification
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/profile',
          name: 'profile',
          component: profile
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        },
        {
          path: '/forgetcode',
          name: 'forgetcode',
          component: forgetcode
        }
      ]
    }
  ],
  // mode: routerMode,
	// strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
});
