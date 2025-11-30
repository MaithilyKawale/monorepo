import { createRoot } from 'react-dom/client'
import React from 'react'
import { useState } from 'react'
import Home from './views/Home.jsx'


function App() {
  const [emoji,setemoji]=useState("😀")


    return (
      <div>
        <h1>Emoji Interpreter</h1>
        <div>
          {Home}
        </div>
        
      </div>

    )
}
createRoot(document.getElementById('root')).render(
    <App />
)
