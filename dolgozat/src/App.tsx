import { useState } from 'react'
import './App.css'
import Kartyak from './component/Kartyak'

function App() {
  const [foglal, setFoglal]= useState(0)

  function kattintas(){
    
  }

  return (
    <>
        <div>
          <header>
                <h1>Tanulószobák neked</h1>
                <p>Talál meg számodra megfelelő tanulószobát!</p>
            </header>
            <main>
                <Kartyak />
            </main>
            <footer>
                <p>Stolár-Németh Villő</p>
            </footer>
        </div>
    </>
  )
}

export default App