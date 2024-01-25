import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppViewResolver, AuthorizationConfigProvider } from './components';
import '@kudyniuk/components/style';
import { Provider } from 'react-redux';
import { store } from './store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthorizationConfigProvider>
      <Provider store={store}>
        <AppViewResolver />
      </Provider>
    </AuthorizationConfigProvider>
  </React.StrictMode>,
);
