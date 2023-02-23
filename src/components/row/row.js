import { useState, useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Tabs from '../tabs/tabs';

import './row.css'


const Row = (props) => {
  
// Инвентарь с 16ю items
  const [inv, setInv] = useState(
    [   {id: 0, item: null},
        {id: 1, item: null},
        {id: 2, item: null},
        {id: 3, item: null},
        {id: 4, item: null},
        {id: 5, item: null},
        {id: 6, item: null},
        {id: 7, item: null},
        {id: 8, item: null},
        {id: 9, item: null},
        {id: 10, item: null},
        {id: 11, item: null},
        {id: 12, item: null},
        {id: 13, item: null},
        {id: 14, item: null},
        {id: 15, item: null}
        ]
  );
 
// При изменении props 
useEffect(()=> {
  console.log('useEfect')
  // Элемент который получает укомплектованную базу по инвентарю. 
  const elem = props.data ? props.data.map((item, id) => {
 
    // Получаем значение ключа
    const elem = Object.values(item);
    
  // Каждый раз вовзвращает id и item в котором содержится значения ключа
    return {'id': id , 
            item: item.srcName, 
            ammo: item.ammo, 
            element: item.rage_id, 
            gunId: item.gunId,
            playerId: item.playerId,
            idGunTable: item.idGunTable}
  }): null;
  // Проверка для браузера
  elem ?  setInv(inv.map((item, id) => {
    // Перебираем старый инвентарь и делаем проверку, если id меньше или равен количеству элементов..
    if (id <= elem.length - 1){
      // то возвращаем ему elem по порядку
      return(elem[id])
    }
    // когда элементы заканчиваются, возвращаются пустые строки инвентаря.
    return {id}
  })) : null;

}, [props.data])




// Сложноватая технология drag and drop инвентаря, ссылка с объяснением  https://www.youtube.com/watch?v=FgvJH91a5K0







  function dropHandler (e, card){
    console.log(e.dragData)
    console.log(card)

    setInv(inv.map(elem => {

      if(elem.id === card.id){
        return {...elem, 
                         item: e.dragData.item,
                         ammo: e.dragData.ammo,
                         gunId: e.dragData.gunId,
                         playerId: e.dragData.playerId,
                         element: e.dragData.element,
                         idGunTable: e.dragData.idGunTable
        }
      }
      if(elem.id === e.dragData.id){
        return {id: elem.id}
      }
      return elem
    }))
    // if(!card.item){
    //   setInv(inv.map(inv => {
    //     if(inv.id === card.id){
    //       return{...inv,
    //                      item: e.dragData.item,
    //                      ammo: e.dragData.ammo,
    //                      gunId: e.dragData.gunId,
    //                      playerId: e.dragData.playerId,
    //                      element: e.dragData.element,
    //                      idGunTable: e.dragData.idGunTable
    //                      }
    //     }
    //     return inv
    //   }))
    // }
  }

  // function dropHandler(e, card){
  //   e.preventDefault();
  //  console.log(e)
  
  //   const{currentCard} = props;

  //   setInv(inv.sort(sortCards).map(c => {
  //     if(c.id === card.id){
  //       return{...c, 
  //                   item: e.dragData.item,
  //                   ammo: e.dragData.ammo,
  //                   gunId: e.dragData.gunId,
  //                   playerId: e.dragData.playerId,
  //                   element: e.dragData.element,
  //                   idGunTable: e.dragData.idGunTable
  //                   }
  //     }
  //     if(c.id === currentCard.id){
  //       return{...c, 
  //                     item: card.item, 
  //                    ammo: card.ammo, 
  //                    gunId: card.gunId, 
  //                    playerId: card.playerId, 
  //                    idGunTable: card.idGunTable,
  //                    element: card.element
  //                   }
  //     }
  //     return c
  //   }))
  

  // }

  const sortCards = (a, b) => {
    if(a.id > b.id){
      return 1
    }else{ 
      return -1
    }
  }
 
  const inventory = inv.map((card) => 
 
              <DropTarget targetKey="item" 
                onHit={(e) => dropHandler(e, card)}
        
                key={card.id}>
            
                <div className="placeholder" >
                  
                    <DragDropContainer targetKey="item" 
                                      dragData = {card} 
                                      // onDragStart={(e)=>  props.dragStartHandler(e, card)}
                                      >
                    
                      { card.item ? <img src={card.item} className="item" alt="inventory-item"/> : null}
                    </DragDropContainer>
                </div>
              </DropTarget>
       
    ) 

  // onClick={() => {mp.trigger('itemValue', JSON.stringify({'item': 'myGun'}))}}
  // onDragEnter={(e)=> console.log(` enter ${e}`)}
  // onDragLeave={(e)=> console.log(` leave ${e}`)}
console.log(inv)
  
  return(

        <div className="row">
          <Tabs/>
           {inventory}
        </div>  
  )
    
}

export default Row;