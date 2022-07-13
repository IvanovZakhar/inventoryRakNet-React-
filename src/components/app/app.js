import { Component } from 'react';
import './app.css';
import Inv from '../inv/inv';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [
                {weapon:'mp-5', ammunition: '800'},
                {weapon:'m4', ammunition: '3000'},
                {weapon:'deagle', ammunition: '15000'},
            ]
        }
    }

    render(){
        return(
            <div className="app">
                <Inv/>
            </div>
        )
    }
}


export default App;