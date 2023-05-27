import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from '../components/App'; // Assuming your main component is named 'App'

const store = createStore(rootReducer);

const Root = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

export default Root;
