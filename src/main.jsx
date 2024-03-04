import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import ProductDetails from './components/ProductDetails.jsx'
import MainLayout from './components/layouts/MainLayout.jsx';
import { ToastContainer, toast } from 'react-toastify';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>
  },
  {
    path:"/products/:productId",
    element:(<MainLayout><ProductDetails/></MainLayout>)
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
        <ToastContainer />
      </RouterProvider>
    </Provider>   
  </React.StrictMode>,
)
