import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AllProducts from "./components/AllProducts.jsx"
import MenComponent from "./components/MenComponent.jsx"
import WomenComponent from "./components/WomenComponent.jsx"
import JewelleryComponent from "./components/JewelleryComponent.jsx"
import ElectronicsComponent from "./components/ElectronicsComponent.jsx"
import Cart from "./components/Cart.jsx"
import WishList from "./components/WishList.jsx"
import OrderHistory from "./components/OrderHistory.jsx"
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "menRoute",
        element: <MenComponent />,
      },
      {
        path: "womenRoute",
        element: <WomenComponent />
      },
      {
        path: "jewelleryRoute",
        element: <JewelleryComponent />
      },
      {
        path: "electronicsRoute",
        element: <ElectronicsComponent />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "wishList",
        element: <WishList />
      },
      {
        path: "orderHistory",
        element: <OrderHistory />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
