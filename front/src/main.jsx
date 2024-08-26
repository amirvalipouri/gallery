import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './redux/index.jsx'
import CartCountProvider from './context/cartcount.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Provider store={store}>
      <CartCountProvider>
        <App />
      </CartCountProvider>
    </Provider>

  </BrowserRouter>,
)
