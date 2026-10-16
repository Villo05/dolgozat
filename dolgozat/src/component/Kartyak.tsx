import { TANULOSZOBAK, type tanuloszobakTipus } from '../adatok'
import Kartya from './Kartya'
import './Kartya.css'

interface kartyakProps{
    elem:tanuloszobakTipus
}

export default function Kartyak({elem}:kartyakProps){
    
    

    return(
        <>
            <div>
                {TANULOSZOBAK.map((szoba)=>(
                    <Kartya key={szoba.id} elem={TANULOSZOBAK[0]}
                    />
                ))}
                
            </div>
        </>
    )
}