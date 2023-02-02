import { useState, useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Tabs from '../tabs/tabs';

import './row.css'


const Row = (props) => {
  



// Инвентарь с 16ю items
  const [inv, setInv] = useState(
    [   {id: 1, item: null},
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
        {id: 15, item: null},
        {id: 16, item: null}]
  );

// При изменении props 
useEffect(()=> {
  // Элемент который получает укомплектованную базу по инвентарю. 
  const elem = props.data ? props.data.map((item, id) => {
    console.log(item)
    // Получаем значение ключа
    const elem = Object.values(item);
    
  // Каждый раз вовзвращает id и item в котором содержится значения ключа
    return {'id': id , item: elem[0], ammo: item.ammo, element: item.rageId}
  }): null;
  // Проверка для браузера
  elem ?  setInv(inv.map((item, id) => {
    // Перебираем старый инвентарь и делаем проверку, если id меньше или равен количеству элементов..
    if (id <= elem.length - 1){
      // то возвращаем ему elem по порядку
      return(elem[id])
    }
    // когда элементы заканчиваются, возвращаются пустые строки инвентаря.
    return item
  })) : null;

}, [props])




// Сложноватая технология drag and drop инвентаря, ссылка с объяснением  https://www.youtube.com/watch?v=FgvJH91a5K0
  const[currentCard, setCurrentCard] = useState(null);


  function dragStartHandler (e, card){
 
    e.target.tagName === 'IMG' ? setCurrentCard(card) : e.preventDefault(); 
  }

  function dragEndHandler(e, card) {
    e.preventDefault(); 
 
  }

  function dragOverHandler(e, card) {

    e.preventDefault();
 
    
  }

  function dropHandler(e, card){
  
    e.preventDefault();
    setInv(inv.sort(sortCards).map(c => {
      if(c.id === card.id){
        return{...c, item: currentCard.item}
      }
      if(c.id === currentCard.id){
        return{...c, item: card.item}
      }
      return c
    }))
  }

  const sortCards = (a, b) => {
    if(a.id > b.id){
      return 1
    }else{ 
      return -1
    }
  }
console.log(inv)
  const inventory = inv.map((card) => 
 
              <DropTarget targetKey="item" 
                onDragEnter={(e)=>  dragStartHandler(e, card)}
                onHit={(e) => dropHandler(e, card)}
                key={card.id}>
            
                <div className="placeholder" >
                  
                    <DragDropContainer targetKey="item" dragData = {card}>
                    
                      { card.item ? <img src={card.item} className="item" alt="item"/> : null}
                    </DragDropContainer>
                </div>
              </DropTarget>
       
    ) 

  // onClick={() => {mp.trigger('itemValue', JSON.stringify({'item': 'myGun'}))}}
  // onDragEnter={(e)=> console.log(` enter ${e}`)}
  // onDragLeave={(e)=> console.log(` leave ${e}`)}

  return(

        <div className="row">
          <Tabs/>
           {inventory}
        </div>  
  )
    
}

export default Row;