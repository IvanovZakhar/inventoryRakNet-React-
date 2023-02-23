import { useState, useEffect } from 'react';
import { DropTarget, DragDropContainer } from 'react-drag-drop-container';
import './character.css'


function Character (props) {
    const count = props.hands ? props.hands[0]: null;
    console.log(count)
  
    const [hands, setHands] = useState()

    useEffect(()=>{
        // const [id_item, item_name, rage_id, ammo, playerId, idGunTable, srcName] = props.hands[0]  
        if(props.hands){
            console.log("useEffectCharacter")
        console.log(props.hands)
            const {id_item, item_name, rage_id, ammo, playerId, idGunTable, srcName} = props.hands[0] 
           
            setHands({
                      ammo: ammo, 
                      element: rage_id, 
                      gunId: id_item, 
                      idGunTable, 
                      item: srcName, 
                      playerId})
        }
    }, [count])
    
    function dropHandler (e) {
   
       setHands(e.dragData)
       mp.trigger('itemValue', JSON.stringify(e.dragData));
    }
 
 console.log(hands)
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
                                   onDrop={(e)=> {  
                                                        
                                                        setHands('')
                                                        mp.trigger('removeItem',  JSON.stringify(hands))
                                                    }
                                                      }
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