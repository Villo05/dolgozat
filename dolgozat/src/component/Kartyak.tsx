import { type tanuloszobakTipus } from '../adatok'
import Kartya from './Kartya'
import './Kartya.css'

interface kartyakProps{
    elem:tanuloszobakTipus[]
    kattintas: (id:number)=> void
}

export default function Kartyak({elem, kattintas}:kartyakProps){
    
    

    return (
        <div className="kartyak">
            {elem.map((szoba) => (
                <Kartya
                    key={szoba.id}
                    elem={szoba}
                    kattintas={kattintas}
                />
            ))}
        </div>
    )
}