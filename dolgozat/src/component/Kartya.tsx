import type { tanuloszobakTipus } from "../adatok"

interface kartyaProps{
    elem:tanuloszobakTipus,
    kattintas: (id:number)=> void
}

export default function Kartya({elem, kattintas}:kartyaProps){
    
    return(
        <>
            <div className="kartya">
                <h2>{elem.szoba_nev}</h2>
                <p>{elem.szobatipus}</p>
                <p>{elem.id}</p>
                <p>{elem.szobatipus}</p>
                <p>{elem.emelet}.</p>
                <p>{elem.ferohely} fő</p>
                <p>{elem.foglalt_helyek} fő</p>
                <button onClick={() => kattintas(elem.id)}>Helyet foglalok</button>
            </div>
        </>
    )
}