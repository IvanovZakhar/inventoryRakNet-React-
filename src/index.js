import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inventory from './components/inventory/inventory';

if ("mp.events.add" in window)  mp.events.add('setData', state => {console.log(state)})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    

    <Inventory/>
);


