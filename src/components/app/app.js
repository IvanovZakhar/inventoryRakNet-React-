import { useState, useEffect } from 'react';
import Inv from '../inv/inv';
import './app.css';


const App = () => {

    const [className, setClass] = useState('hide')
         const data = [
                {weapon:'mp-5', ammunition: '800'},
                {weapon:'m4', ammunition: '3000'},
                {weapon:'deagle', ammunition: '15000'}]

        useEffect(() => {
            const onKeypress = e => console.log(e);
            
            document.addEventListener('keypress', (e) => {
                e.key == 'y' ? setClass('app active'): null;
            });
            
            return () => {
                document.removeEventListener('keypress', onKeypress);
            };
            }, []);

        return(
            <div className={className}>
                <Inv/>
            </div>
        )
    
}


export default App;