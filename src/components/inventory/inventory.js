import { useState, useEffect } from 'react';
import Row from '../row/row';
import InventoryItem from '../inventory-item/inventory-item';
import Character from '../character/character';
import './inventory.css';

 

const Inventory = () => {

    // Функционал для показа/скрытия инвентаря
    const [pos, setPos] = useState(false);

    function onUpdateClassName  (e){
        if(e.key === 'e' || e.key === 'E'){
            setPos(!pos)
            mp.invoke('focus', !pos)
        }
    }

   useEffect(()=> {
    window.addEventListener('keydown', onUpdateClassName )
    return () =>{
        window.removeEventListener('keydown', onUpdateClassName )
    }
   })

    const { resultInv, resultHands } = InventoryItem()


    
 const className = pos ? "inventory active"  : 'inventory'
 
        return(
            <div className={className}>
                <Character hands ={resultHands} />
                <Row data={resultInv}/>
            </div>
        )
    
}


export default Inventory;