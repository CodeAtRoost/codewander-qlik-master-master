// src/components/qOpenAppButton.js
import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom'
//import { connect } from 'react-redux'
//import { history } from './../redux/store';
import QDimension from './QDimension'
class QDimensions extends Component {
    constructor(props) {
        super(props)       
    }
   
    render() {
		
		const qDimensions = this.props.qDimensions.map(function(qDimension){
			return (<QDimension qDimension={qDimension} />);			
		})
	
		
		
        return ( 
				 <table class="table table-hover">
				  <thead>
					<tr>
					  <th scope="col">Title</th>
					  <th scope="col">Description</th>
					  <th scope="col">Details</th>
					  <th scope="col">Action</th>
					</tr>
				  </thead>
				  <tbody>
				  {qDimensions}
				  </tbody>
				 </table>
					

            
        );
    }
}


export default (QDimensions);