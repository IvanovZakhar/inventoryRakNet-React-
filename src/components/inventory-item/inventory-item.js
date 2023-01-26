import { useState } from 'react'
import AssaultRifle from '../../icon/Assault-rifle-icon.webp'
import WeaponPistol from '../../icon/weapon_pistol.webp'
import BaseballBat from '../../icon/weapon_bat.webp'

const InventoryItem = () => {
  // Создаем массив наших items
    const arr = [{AssaultRifle: AssaultRifle}, {  WeaponPistol: WeaponPistol}, {BaseballBat: BaseballBat}]

    const [data, setData] = useState('');
    // Получаем информацию данные с клиента
    if ("mp" in window){
        mp.events.add('setData', data => { 
            setData(JSON.parse(data))
        })
    }


    
    const result = data ? arr.filter((item, i) => {
       // значения массива
        let arrKey = Object.keys(item)
   
// Проверка для браузера
      if ( data[i]) { 
        // перебираем данные массива, сравнивая их с данными полученными от клиента
        if (arrKey[0] === data[i].item_name ){
             // Возвращаем совпадения
        return item
       } }
       
    }) : null;
    console.log(data)
    return(
        {result}
    )
  }
  
  export default InventoryItem;