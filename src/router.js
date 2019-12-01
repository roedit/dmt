import React from 'react';
import { Route } from 'mobx-router';
import stores from './stores';
import Home from './views/home/Home';
import Demo from './views/demo/Demo';

function goToView(viewName, params) {
  const {
    router: { goTo }
  } = stores;

  goTo(routerViews[viewName], params, stores);
}

const routerViews = {
  home: new Route({
    name: 'home',
    path: '/',
    component: <Home />
  }),
  demo: new Route({
    name: 'demo',
    path: '/demo',
    component: <Demo />
  })
};

export { routerViews, goToView };
