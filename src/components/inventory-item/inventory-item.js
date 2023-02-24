import { useState, useEffect } from 'react'
import AssaultRifle from '../../icon/Assault-rifle-icon.webp'
import WeaponPistol from '../../icon/weapon_pistol.webp'
import BaseballBat from '../../icon/weapon_bat.webp'

const InventoryItem = () => {
  // Создаем массив наших items
    const arr = [{AssaultRifle: AssaultRifle}, {  WeaponPistol: WeaponPistol}, {BaseballBat: BaseballBat}]

    const [data, setData] = useState('');
    const [hands, setHands] = useState('')
    // Получаем информацию данные с клиента

      if ("mp" in window){
        mp.events.add('setInv', data => { 
          // data[0] - инвентарь
          // data[1] - руки
   
            setData(JSON.parse([data]))
            
        })
        mp.events.add('setHands', handsServer => {
       
          // data[0] - инвентарь
          // data[1] - руки
            setHands(JSON.parse([handsServer]))
     
        })
    }


 


    function returnPictersForItems (data){
      const item = data ? data.filter((dataItem) => {
                    // перебираем масив из картинок 
                    let elem = arr.map(arrItem => {
                    // Если название одного из ключей массива картинок совпадает с назаванием оружия, 
                    // то содержимое ключа массива(то есть ссылка на картинку) отправляется в массив под именем srcName
                    // таким образом каждый полученный предмет из бд будет объявлен вместе с картинкой
                    if(dataItem.item_name ===  Object.keys(arrItem)[0]){
                      dataItem.srcName = Object.values(arrItem)[0];
                      return dataItem;
                    }
                    })
                    return elem;
                    }) : null;
                 
        return item;
    }

    const resultInv = returnPictersForItems(data);
    const resultHands = returnPictersForItems(hands);
 
 

    return(
        {resultInv, resultHands}
    )
  }
  
  export default InventoryItem;