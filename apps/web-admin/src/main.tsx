import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppViewResolver, AuthorizationConfigProvider } from './components'
import '@kudyniuk/components/style'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthorizationConfigProvider>
        <Provider store={store}>
            <AppViewResolver/>
        </Provider>
      </AuthorizationConfigProvider>
  </React.StrictMode>,
)
