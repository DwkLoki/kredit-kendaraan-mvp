import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DealerPortal from "./pages/DealerPortal"
import MarketerPortal from "./pages/MarketerPortal"
import ApprovalPortal from "./pages/ApprovalPortal"
import './index.css'

// membuat router sekaligus route matcher-nya
const router = createBrowserRouter([
    {
        path: '/',
        element: <DealerPortal />
    },
    {
        path: '/marketer',
        element: <MarketerPortal />
    },
    {
        path: '/approval',
        element: <ApprovalPortal />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
