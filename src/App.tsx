import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './RootLayout';
import Education from './Pages/Education';

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
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
