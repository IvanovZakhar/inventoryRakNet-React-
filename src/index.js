import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inventory from './components/inventory/inventory';

 
function onUpdateClassName  (e){
    console.log(e.key)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Inventory onKeyPress={e => onUpdateClassName(e) } />
);


