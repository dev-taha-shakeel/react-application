import React from 'react';
import { Provider } from 'react-redux';
// main routes
import AppRoutes from './routes/routes';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
