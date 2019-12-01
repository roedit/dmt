import { RouterStore } from 'mobx-router';
import IntlStore from './intlStore/intlStore';
import ExampleStore from './exampleStore/exampleStore';

const stores = {
  router: new RouterStore(),
  intlStore: new IntlStore(),
  exampleStore: new ExampleStore()
};

export default stores;
