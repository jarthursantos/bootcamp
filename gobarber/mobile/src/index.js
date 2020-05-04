import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import '~/config/ReactotronConfig';

import {PersistGate} from 'redux-persist/integration/react';

import App from '~/App';
import {store, persistor} from '~/store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
