import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
//import pageHeader from './components/pageHeader.js';
import qEngine from './components/qEngine.js';
//import qApp from './components/qApp.js'
class App extends Component {
    render() {
        const pathname = window.location.pathname
        return ( 
            <div>
                <Switch>                
                    <Route exact path="/apps" component={qEngine} />
                    <Route path="**" component={qEngine} />
                </Switch>
            </div>
        );
    }
}
export default App;