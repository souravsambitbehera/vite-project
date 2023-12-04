import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactSteper from './components/ReactSteper.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import ReduxComponent from './redux/ReduxComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    {/* <ReactSteper/> */}
    <ReduxComponent />
    </Provider>
  </React.StrictMode>,
)
