import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { Provider } from 'react-redux'
import { myStore } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
