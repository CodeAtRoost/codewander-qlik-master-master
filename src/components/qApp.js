import React, { Component } from 'react';
import { connect } from 'react-redux';
import {openApp, getSheets, getDimensions, getMeasures, getMasterVisualizations, getVariables} from './../redux/actions/actions'
import QSheets from './QSheets'
import QDimensions from './QDimensions'
import QMeasures from './QMeasures'
import QVariables from './QVariables'
import QVisualizations from './QVisualizations'



const mapStateToProps = state => {
    return {
        qlikApp: state.qApps.qApp,
		qSheets: state.qApps.qSheets,
		qMasterDimensions: state.qApps.qMasterDimensions,
		qMasterMeasures: state.qApps.qMasterMeasures,
		qMasterVisualizations: state.qApps.qMasterVisualizations,
		qVariables: state.qApps.qVariables,
		qDisplayObject :state.qDisplayObject == null ? {qObjectId:null}:state.qDisplayObject
			
    }
}

class qApp extends Component {
	constructor(props) {
        super(props)
        this.selectSheet = this.selectSheet.bind(this)
		this.getCurrentAppSheets= this.getCurrentAppSheets.bind(this);
		this.getCurrentAppDimensions= this.getCurrentAppDimensions.bind(this);
		this.getCurrentAppMeasures= this.getCurrentAppMeasures.bind(this);
		this.getCurrentAppVariables= this.getCurrentAppVariables.bind(this);
		this.getCurrentAppMasterVisualizations= this.getCurrentAppMasterVisualizations.bind(this);
		this.updateDisplayObject= this.updateDisplayObject.bind(this);
    }
	
	updateDisplayObject(pDisplayObjectId){
	//this.props.qDisplayObject.qObjectId =pDisplayObjectId;
	let qDisplayObject= Object.assign({}, this.props.qDisplayObject)
	qDisplayObject.qObjectId=pDisplayObjectId 
	this.setState( {qDisplayObject})
	}
	
	getCurrentAppSheets(){
		this.props.getSheets();	
		this.props.qlikApp.currentView="SHEETS";
		//this.setState({qApp:this.props.qlikApp});		
	}
	
	getCurrentAppDimensions(){
		this.props.getDimensions();	
		this.props.qlikApp.currentView="DIMENSIONS";
		//this.setState({qApp:this.props.qlikApp});		
	}
	
	getCurrentAppMeasures(){
		this.props.getMeasures();	
		this.props.qlikApp.currentView="MEASURES";
		//this.setState({qApp:this.props.qlikApp});		
	}
	
	getCurrentAppVariables(){
		this.props.getVariables();	
		this.props.qlikApp.currentView="VARIABLES";
		//this.setState({qApp:this.props.qlikApp});		
	}
	
	getCurrentAppMasterVisualizations(){
		this.props.getMasterVisualizations();	
		this.props.qlikApp.currentView="MASTER_VISUALIZATIONS";
		//this.setState({qApp:this.props.qlikApp});		
	}
	
	selectSheet(qSheet_selected){
		
	}
	
    componentWillReceiveProps(nextProps) {
		
    }
        
    componentWillMount() {
		const {match:{params}}=this.props;
        this.props.openApp(params.appid)
    }
	
	 
    
    render() {
	if (this.props.qlikApp!=null){
	var self=this;
	var selectedAppDetails=[];
	var QShowDetails=""
	var QDisplayObject=""
	if (this.state!=null)QDisplayObject=this.state.qDisplayObject==null? "":this.state.qDisplayObject.qObjectId
	
	
	if (this.props.qlikApp.currentView=="SHEETS")
	{
		QShowDetails=<QSheets qSheets={this.props.qSheets} />
	}
	else if (this.props.qlikApp.currentView=="DIMENSIONS")
	{
		QShowDetails=<QDimensions qDimensions={this.props.qMasterDimensions} />
	}
	else if (this.props.qlikApp.currentView=="MEASURES")
	{
		QShowDetails=<QMeasures qMeasures={this.props.qMasterMeasures} updateDisplayObject={this.updateDisplayObject} />
	}
	else if (this.props.qlikApp.currentView=="VARIABLES")
	{
		QShowDetails=<QVariables qVariables={this.props.qVariables} />
	}
	else if (this.props.qlikApp.currentView=="MASTER_VISUALIZATIONS")
	{
		QShowDetails=<QVisualizations qVisualizations={this.props.qMasterVisualizations} />
	}
	else{
		
		QShowDetails = <div> Shows list of compnents of an app </div>
	}
	
	
    
		return ( 
		<div>
		<nav className="navbar navbar-expand-lg  navbar-light bg-light">
			  <a className="navbar-brand" href="">{this.props.qlikApp.qTitle}</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarColor02">
				<ul className="navbar-nav mr-auto">
				  <li className="nav-item" onClick={(e) => self.getCurrentAppSheets()}>
					<a className="nav-link" >Sheets</a>
				  </li>
				  <li className="nav-item" onClick={(e) => self.getCurrentAppDimensions()}>
					<a className="nav-link" >Master Dimensions</a>
				  </li>
				  <li className="nav-item" onClick={(e) => self.getCurrentAppMeasures()}>
					<a className="nav-link" >Master Measures</a>
				  </li>	
				  <li className="nav-item" onClick={(e) => self.getCurrentAppMasterVisualizations()}>
					<a className="nav-link" >Master Visualization</a>
				  </li>
				  <li className="nav-item" onClick={(e) => self.getCurrentAppVariables()}>
					<a className="nav-link" >Variables</a>
				  </li>
				  
				</ul>
				
			  </div>
		</nav>
		<div className="row">
		<div className="col-lg-12">
		{QShowDetails}
		</div>
		<div className="col-lg-8">
		<div> {QDisplayObject}</div>
		</div>
		</div>
		
		
		</div>
        );
	}
	else{
		return null
	}
    }
}
export default connect(mapStateToProps, {openApp, getSheets, getDimensions, getMeasures, getMasterVisualizations, getVariables })(qApp);
