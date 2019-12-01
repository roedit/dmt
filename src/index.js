import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import stores from './stores';
import theme from './theme';
import { IntlProvider } from './IntlProviderWrapper';
import { configure } from 'mobx';
import { routerViews } from './router';
import { startRouter } from 'mobx-router';

configure({
  enforceActions: 'always'
});
startRouter(routerViews, stores);

ReactDOM.render(
  <Provider {...stores} store={stores}>
    <IntlProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
