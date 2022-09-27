import Inv from '../inv/inv';
import './app.css';


const App = () => {

         const data = [
                {weapon:'mp-5', ammunition: '800'},
                {weapon:'m4', ammunition: '3000'},
                {weapon:'deagle', ammunition: '15000'}]



        return(
            <div className="app">
                <Inv/>
            </div>
        )
    
}


export default App;