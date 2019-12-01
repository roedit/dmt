import React from 'react';
import { IntlProvider } from 'react-intl';
import { observer, inject } from 'mobx-react';

const { Provider } = React.createContext();

@inject('intlStore')
@observer
class IntlProviderWrapper extends React.Component {
  render() {
    const { children, intlStore } = this.props;
    const formats = { time: { hour12: false } };

    if (!intlStore.language || !intlStore.messages) {
      return null;
    }

    return (
      <Provider>
        <IntlProvider
          key={intlStore.language}
          locale={intlStore.language}
          messages={intlStore.messages}
          defaultLocal="en"
          formats={formats}
        >
          {children}
        </IntlProvider>
      </Provider>
    );
  }
}

export { IntlProviderWrapper as IntlProvider };
