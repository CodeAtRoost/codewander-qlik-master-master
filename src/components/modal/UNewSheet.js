
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {createSheet} from './../../redux/actions/actions'
const qlik_server= process.env.REACT_APP_QLIK_SERVER_URL;
const mapStateToProps = state => {
    return {
        qSheetActionResponse: state.qApps.qSheetActionResponse
    }
}
class UNewSheet extends Component {
    constructor(props) {
        super(props)
		
       
    }
	
	validateSheetName= (e) =>{
	let n = e.target.value;
	if (n.length==0) {
		this.setState({sheetNameValid:false})
		
	}
	else{
		this.setState({sheetNameValid:true})
	}
	this.setState({sheetName: n})
		
	}
	
	createSheet = () =>{
		this.props.createSheet(this.state.sheetName,"")
		
	}
	
	
	componentWillMount() {
       this.setState({sheetName:""});
		this.setState({sheetDescription:""});
		this.setState({sheetNameValid: false});
		//this.props.openApp('NSEE.qvf');
    }
   
    render() {
		let self=this;
		let message=""
		if (self.props.qSheetActionResponse!=null && self.props.qSheetActionResponse.qResponseStatus!=null ){
			//alert(self.props.qNewAppDetails.qAppId)
			if (self.props.qSheetActionResponse.qResponseStatus=="success"){
			message=<div className="alert alert-dismissible alert-success">
						<button type="button" className="close" data-dismiss="alert">&times;</button>
						<strong>Sheet Created</strong> <span>Sheet Id: {self.props.qSheetActionResponse.qResponseMsg.qInfo.qId}</span>.
					</div>
			}else if (self.props.qSheetActionResponse.qResponseStatus=="error"){
			message=<div className="alert alert-dismissible alert-primary">
					  <button type="button" className="close" data-dismiss="alert">&times;</button>
					  <strong>Sheet creation failed</strong> Try again later.
					</div>
			}
			self.props.qSheetActionResponse.qRequest=null;
			self.props.qSheetActionResponse.qResponseStatus=null;
			self.props.qSheetActionResponse.qResponseMsg=null;
		}
		return ( 
				<div>
				<button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#newsheet">New Sheet</button>	
							
				<div className="modal" id="newsheet">
				  <div className="modal-dialog" role="document">
					<div className="modal-content">
					  <div className="modal-header">
						<h5 className="modal-title">New Sheet Details</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div className="modal-body">
					  {message}
						<div className="form-group" className={this.state.sheetNameValid? "has-success" : "has-danger"}>
						  <label className="form-control-label" >Sheet Name</label>
						  <input type="text" value={this.state.sheetName} onChange= {this.validateSheetName}className={this.state.sheetNameValid? "form-control is-valid" : "form-control is-invalid"} id="inputValid"/>
						  <div className={this.state.sheetNameValid? "valid-feedback": "invalid-feedback"}>{this.state.sheetNameValid? 'Valid' : 'Invalid'} Sheet Name</div>
						</div>
					  </div>
					  <div className="modal-footer">
						<button type="button" className="btn btn-primary" disabled={!this.state.sheetNameValid} onClick={this.createSheet}>Create Sheet</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					  </div>
					</div>
				  </div>
				</div>
				</div>
				 
					

            
        );
    }
}


export default connect(mapStateToProps, { createSheet })(UNewSheet);