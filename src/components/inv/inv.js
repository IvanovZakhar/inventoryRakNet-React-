import { createElement, useState, useEffect } from 'react';

import './inv.css'


const Inv = () => {
  const [inv, setInv] = useState(
[    {id: 1, item: 'https://www.iconninja.com/files/477/796/985/mp5-gun-icon.png'},
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

  const [className, setClass] = useState('hide')

  useEffect(() => {
    const onKeypress = e => console.log(e);
  
    document.addEventListener('keypress', (e) => {
      e.key == 'y' ? setClass('inv active'): null;
    });
  
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, []);

  const event = new KeyboardEvent('keypress', {
    key: 'enter',
  });

  console.log(event) 

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


        return(
          <div className="inv">
            <div className="row">
              {inv.map(card => 
                <div 
                  key={card.id} 
                  className="placeholder"
                  draggable={true}
                  onDragStart={(e) => dragStartHandler(e, card)}
                  onDragLeave={(e) => dragEndHandler(e, card)}
                  onDragEnd={(e) => dragEndHandler(e, card)}
                  onDragOver={(e) => dragOverHandler(e, card)}
                  onDrop={(e) => dropHandler(e, card)}
                  onClick={() => {  mp.trigger('itemValue', JSON.stringify({'item': 'myGun'}))}}>
                  {card.item ? <img src={card.item} alt="item"/> : null }

                </div>
                )}
            </div>
          </div>


        )
    
}

const elem = (elem) => {

}

export default Inv;