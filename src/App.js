import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Toast from './components/Toast';

const router = createBrowserRouter([{
  path: '/',
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/error',
      element: <Error />
    }
  ]
}])

function App() {
  return (<>
    <RouterProvider router={router} />
    <Toast />
  </>);
}

export default App;
