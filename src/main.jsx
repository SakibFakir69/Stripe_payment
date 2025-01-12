import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthContextapi from './context/AuthContextapi.jsx'

const queryClient =new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContextapi>
         
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </AuthContextapi>


  </StrictMode>,
)
