import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import Header from './mui-components/Header.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './mui-components/Home.jsx'
import About from './mui-components/About.jsx'
import Contact from './mui-components/Contact.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Header />,
    children: [
      {
        path:"/home",
        element:<Home />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider>
   
    </Provider>
  </React.StrictMode>,
)
