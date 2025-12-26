import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/projects/dolar_project/">
        <StrictMode>
            <Home />
        </StrictMode>
    </BrowserRouter>
)
