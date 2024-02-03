import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './RootLayout';
import Education from './Pages/Education';
import Certificates from './Pages/Certificates';
import Contact from './Pages/Contact';
import Experience from './Components/Experience';

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
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/experience",
          element: <Experience />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
