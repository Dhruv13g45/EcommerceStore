
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className='w-full home p-3'>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={5}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: 'shadow-xl shadow-white w-[350px] border-black border-[1px]',
          duration: 2000,
          style: {
            background: 'white',
            color: 'black',
          },


          success: {
            duration: 2000,
            theme: {
              primary: 'black',
              secondary: 'white',
            },
          },
        }}
      />

      <Outlet />

    </div>
  )
}

export default App
