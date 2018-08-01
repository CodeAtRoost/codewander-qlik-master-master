import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	
	
    componentWillReceiveProps(nextProps) {
    }
        
    componentWillMount() {
    }
	
	
    
    render() {
	
		return ( 
		
		<div className="jumbotron   text-center fullheight">
		
		  <h1 className="display-3">Qlik Master</h1>
		  <p className="lead">This is the Qlik Demo app demonstrating capabilities of enigma.js. It uses NodeJS for the backend andd ReactJS for the frontend</p>
			<hr className="my-4"/>
			  <p className="lead">
				<a className="btn btn-primary btn-lg" href="http://www.codewander.com" role="button">Learn more</a>
					
			  </p>
			 <p>All copyrights reserved.  Codewander.com &copy; 2018</p>
			  

		</div>
		
		);
	}
}
export default (Home);
