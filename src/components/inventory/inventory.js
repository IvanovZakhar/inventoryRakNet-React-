import { useState, useEffect } from 'react';
import Row from '../row/row';
import InventoryItem from '../inventory-item/inventory-item';
import Character from '../character/character';
import './inventory.css';

 


const Inventory = () => {
    const [data, setData] = useState('');

    // if ("mp" in window){
    //     mp.events.add('setData', data => { 
    //         setData(JSON.parse(data))
    //     })
    // }




    const { result } = InventoryItem()

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
console.log(data)
console.log(data)
        return(
            <div className="inventory">
                <Character/>
                <Row data={result}/>
            </div>
        )
    
}


export default Inventory;