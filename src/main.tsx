import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Characters from './routes/Characters.tsx'
import Locations from './routes/Locations.tsx'
import Episodes from './routes/Episodes.tsx'
import App from './App.tsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/locations',
    element: <Locations />
  },
  {
    path: '/episodes',
    element: <Episodes />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
