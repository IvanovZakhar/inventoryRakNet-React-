import { useState } from 'react';
import { DropTarget } from 'react-drag-drop-container';
import './character.css'


function Character () {
    const [hands, setHands] = useState()
    function dropHandler (e) {
       setHands(e.dragData.item)
       mp.trigger('itemValue', JSON.stringify(e.dragData));
    }
    function onDragItem (e){
        console.log()
       
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
                    onDragEnter={(e) =>  onDragItem(e)}
                    onHit={(e) =>dropHandler(e)}
                   >
                <div class="hands">
                {hands ? <img src={hands} className="item" alt="item"/> : null }
                </div>
            </DropTarget>
            </div>
        </div>
    )
}

export default Character;