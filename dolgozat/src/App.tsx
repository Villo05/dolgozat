import { useState } from 'react'
import './App.css'
import Kartyak from './component/Kartyak'
import { TANULOSZOBAK } from './adatok'


function App() {
  const [foglal, setFoglal]= useState(TANULOSZOBAK)

  function kattintas(id: number) {
        setFoglal(foglal.map((szoba) =>
            szoba.id === id && szoba.foglalt_helyek < szoba.ferohely
                ? {...szoba, foglalt_helyek: szoba.foglalt_helyek + 1}
                : szoba
        ))
  }

  return (
    <>
        <div>
          <header>
                <h1>Tanulószobák neked</h1>
                <p>Találd meg számodra megfelelő tanulószobát!</p>
            </header>
            <main>
                <Kartyak 
                    elem={foglal}
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