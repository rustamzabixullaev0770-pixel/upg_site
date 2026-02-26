import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
<<<<<<< HEAD
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
=======
>>>>>>> 17f07fb726140f569481bb306013f19801769e28

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage/>
      }
    ]
  }
<<<<<<< HEAD
]);

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
=======
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
>>>>>>> 17f07fb726140f569481bb306013f19801769e28
  </StrictMode>,
)
