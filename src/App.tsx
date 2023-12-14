import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import RootLayout from './RootLayout';

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
          path: "/experience",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
