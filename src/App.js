import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home.js';
import PageHeader from './components/PageHeader.js';
import qEngine from './components/qEngine.js';
import qApp from './components/qApp.js'

class App extends Component {
    render() {
        //const pathname = window.location.pathname
        return ( 
            <div>
				<PageHeader/>
                <Switch>                
                    <Route exact path="/" component={Home} />                   	
					
					<Route exact path="/apps" component={qEngine} />                    	
					<Route path="/app/:appid" component={qApp} />		
                </Switch>
				
            </div>
        );
    }
}
export default App;