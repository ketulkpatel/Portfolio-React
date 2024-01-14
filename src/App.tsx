import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './RootLayout';
import Education from './Pages/Education';
import Certificates from './Pages/Certificates';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/certificates",
          element: <Certificates />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
