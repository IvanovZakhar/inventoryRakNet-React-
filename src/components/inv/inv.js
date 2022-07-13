import './inv.css'
import { Component } from 'react';

class Inv extends Component{
    constructor(props){
        super(props)  
    }

    render() {
        return(
            <div class="row">
            <div class="placeholder">
              <div class="item" draggable="true">
                <img src="https://www.iconninja.com/files/477/796/985/mp5-gun-icon.png" alt="" /> 
              </div>
            </div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div> 
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
            <div class="placeholder"></div>
          </div>

        )
    }
}

export default Inv;