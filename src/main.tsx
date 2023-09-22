import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import V3DApp from './V3DApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <V3DApp />
  </React.StrictMode>,
)
