import { useState } from 'react'
import './App.css'
import Kartyak from './component/Kartyak'
import { TANULOSZOBAK } from './adatok'


function App() {
  const [foglal, setFoglal]= useState(0)

  function kattintas(){
      setFoglal(foglal + 1)
  }

  return (
    <>
        <div>
          <header>
                <h1>Tanulószobák neked</h1>
                <p>Talál meg számodra megfelelő tanulószobát!</p>
            </header>
            <main>
                <Kartyak 
                    elem={TANULOSZOBAK}
                    kattintas={kattintas}
                />
            </main>
            <footer>
                <p>Stolár-Németh Villő</p>
            </footer>
        </div>
    </>
  )
}

export default App