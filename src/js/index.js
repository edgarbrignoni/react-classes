//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
// import {Home} from './component/home.jsx';
import Xcomponent from './components/Xcomponent.jsx';
import SecondsCounter from './components/SecondsCounter.jsx';
// import SimpleCounter from './components/simple-counter.jsx';
import Counter from './components/Counter.jsx';

//render your react application
var seconds = 0;

setInterval(function(){ 
    seconds++;
    
    ReactDOM.render(
        <div>
            <div className="container">
                <p></p>
                <h1>Different Components as Classes</h1>
                <hr />
                <Xcomponent
                    city = "Kendall"
                />
                <hr />
                <SecondsCounter
                    seconds = {seconds}
                />
                <hr />
                <Counter />
            </div>
        </div>
        ,
        document.querySelector('#app')
    );

}, 1000);