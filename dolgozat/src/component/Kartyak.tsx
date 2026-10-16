import { TANULOSZOBAK, type tanuloszobakTipus } from '../adatok'
import Kartya from './Kartya'
import './Kartya.css'

interface kartyakProps{
    elem:tanuloszobakTipus
    kattintas:()=> void
}

export default function Kartyak({elem, kattintas}:kartyakProps){
    
    
    
    return(
        <>
            <div>
                <Kartya 
                    elem={TANULOSZOBAK}
                    kattintas={kattintas}    
                />
            </div>
        </>
    )
}