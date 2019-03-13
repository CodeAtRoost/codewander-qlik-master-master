// src/components/qOpenAppButton.js
import React, { Component } from 'react';
import QSheet from './QSheet'
class QSheets extends Component {
    constructor(props) {
        super(props)
       
    }
   
    render() {
		
		const qSheets = this.props.qSheets.map(function(qSheet){
			return (<QSheet qSheet={qSheet} />);			
			
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
				  {qSheets}
				  </tbody>
				 </table>
					

            
        );
    }
}


export default (QSheets);