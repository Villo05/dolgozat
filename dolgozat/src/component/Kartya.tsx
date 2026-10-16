import type { tanuloszobakTipus } from "../adatok"

interface kartyaProps{
    elem:tanuloszobakTipus,
    kattinttas: ()=> void
}

export default function Kartya(elem, kattintas){
    
    return(
        <>
            <div className="kartyak">
                <h2>{elem.szoba_nev}</h2>
                <p>{elem.szobatipus}</p>
                <p>{elem.id}</p>
                <p>{elem.szobatipus}</p>
                <p>{elem.emelet}.</p>
                <p>{elem.ferohely} fő</p>
                <p>{elem.foglalt_helyek} fő</p>
                <button onClick={kattintas}>Helyet foglalok</button>
            </div>
        </>
    )
}