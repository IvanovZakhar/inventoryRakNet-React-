import { useState, useEffect } from 'react';
import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import './character.css'


function Character (props) {
    // Данная переменная предназначена для useEffect, если ее значение изменяется, меняется значение hands
    const pos = props.hands ? props.hands[0]: null;
 
    // информация о руках персонажа 
    const [hands, setHands] = useState()

    useEffect(()=>{
        if(props.hands){
    
            const {id_item, item_name, rage_id, ammo, playerId, idGunTable, srcName} = pos 
           
            setHands({
                      ammo: ammo, 
                      element: rage_id, 
                      gunId: id_item, 
                      idGunTable, 
                      item: srcName, 
                      playerId})
        }else{
            setHands(null)
        }
    }, [pos])
    

    // Устанавливает значение об полученом предемете hands и отправляет через клиент событие о нем на сервер
    function dropHandler (e) {
        console.log('onHit!')
        console.log(e.dragData)
        
       if(pos){
        setHands(null)
       }else{
        setHands(e.dragData);
        mp.trigger('itemValue', JSON.stringify(e.dragData));
       }
       
    }
   // Удаляет значение в руках и отправляет удаление на сервер через клиент
    function onDrop (e) {
        console.log(' onDrop')
        console.log(hands)
        console.log(pos)
        mp.trigger('removeItem',  JSON.stringify(hands))
    }
 
    return(
        <div class="character">
            <div class="character">
            <ul class="character__left-column">
                <li class="placeholder">
    
                </li>
                <li class="placeholder">
                
                </li>
                <li class="placeholder">
                
                </li>
            </ul>
            <div class="character__skin">
    
            </div>
            <ul class="character__right-column">
                <li class="placeholder">
                
                </li>
                <li class="placeholder">
                
                </li>
                <li class="placeholder">
                
                </li>
            </ul>
            <DropTarget targetKey="item" 
                 
                    onHit={(e) => dropHandler(e)}
                   >
                <div class="hands">
               
                <DragDropContainer targetKey="item" 
                                   dragData = {hands}
                                   onDrop={(e)=> onDrop(e)}
                                   >
                    
                      {hands ? <img src={hands.item} className="item" alt="hands-item"/> : null }
                  </DragDropContainer>
                </div>

            </DropTarget>
            </div>
        </div>
    )
}

export default Character;