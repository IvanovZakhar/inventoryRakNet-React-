import { useState, useEffect } from 'react';
import Row from '../row/row';
import InventoryItem from '../inventory-item/inventory-item';
import Character from '../character/character';
import './inventory.css';

 


const Inventory = () => {
    const [pos, setPos] = useState(false);

    // if ("mp" in window){
    //     mp.events.add('setData', data => { 
    //         setData(JSON.parse(data))
    //     })
    // }

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


    // const[currentCard, setCurrentCard] = useState(null);
    // const [className, setClass] = useState('hide')
    //      const data = [
    //             {weapon:'mp-5', ammunition: '800'},
    //             {weapon:'m4', ammunition: '3000'},
    //             {weapon:'deagle', ammunition: '15000'}]

    //     useEffect(() => {
    //         const onKeypress = e => console.log(e);
            
    //         document.addEventListener('keypress', (e) => {
    //             e.key == 'y' ? setClass('app active'): null;
    //         });
            
    //         return () => {
    //             document.removeEventListener('keypress', onKeypress);
    //         };
    //         }, []);

    // function dragStartHandler (e, card){
    //     console.log(e)
    //     console.log(card)
    //      setCurrentCard(card);
    //   }
 const className = pos ? "inventory active"  : 'inventory'
        return(
            <div className={className}>
                {/* <Character hands ={resultHands} dragStartHandler={dragStartHandler}/> */}
                <Character hands ={resultHands} />
                {/* <Row data={resultInv} currentCard={currentCard} dragStartHandler={dragStartHandler}/> */}
                <Row data={resultInv}/>
            </div>
        )
    
}


export default Inventory;