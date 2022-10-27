import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Context/AuthProvider/AuthProvider';
import { routes } from './Routes/Route/Route';

function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`${theme && "bg-gray-900"}`}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
