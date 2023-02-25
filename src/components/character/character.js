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
        // pos - это информация об руках полученая с бд
       if(!pos){
        // если в руках пусто, то делаем тоже самое на стороне браузера
        setHands(null)
        // если в руках пусто, но в e.dragData что то поступает, то отправляем информацию на сервер.
        mp.trigger('itemValue', JSON.stringify(e.dragData));
       }
     // в любом случае hands заполняется информацией из e.dragData 
       setHands(e.dragData);
       
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
                        onHit={(e) => dropHandler(e)}>
                <div class="hands">
               
                <DragDropContainer targetKey="item" 
                                   dragData = {hands}>
                    
                      {hands ? <img src={hands.item} className="item" alt="hands-item"/> : null }
                  </DragDropContainer>
                </div>

            </DropTarget>
            </div>
        </div>
    )
}

export default Character;