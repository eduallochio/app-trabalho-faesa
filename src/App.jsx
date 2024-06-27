import { useState } from "react"
import "./App.css"

function App() {
  const [text, setText] = useState("Texto original")

  const handleClick = () => {
    setText("Texto alterado!")
  }

  return (
    <div className="container">
      <div className="phone">
        <div className="screen">
          <h1>{text}</h1>
          <button onClick={handleClick}>Clique aqui</button>
        </div>
      </div>
    </div>
  )
}

export default App
