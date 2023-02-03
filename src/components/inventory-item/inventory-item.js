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

    console.log(data)


    const result = data ? data.filter((dataItem) => {
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
//     const result = data ? arr.filter((item, i) => {
//       console.log(data[i])
//        // значения массива
//         let arrKey = Object.keys(item)
//       // console.log(arrKey[0], data[i].item_name)
// // Проверка для браузера
//       if ( data[i]) { 
//         console.log(arrKey[0], data[i].item_name)
//         // перебираем данные массива, сравнивая их с данными полученными от клиента
//         if (arrKey[0] === data[i].item_name ){
//              // Возвращаем совпадения
//          item.ammo = data[i].ammo
//          item.rageId = data[i].rage_id
//          item.gunId = data[i].gunId
//          item.playerId = data[i].playerId
//          item.idGunTable = data[i].idGunTable
//          console.log(item)
//         return item
//        } }
       
//     }) : null;
    console.log(data)
    console.log(result)
    return(
        {result}
    )
  }
  
  export default InventoryItem;