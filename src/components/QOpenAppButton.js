// src/components/qOpenAppButton.js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//import { connect } from 'react-redux'
import { history } from './../redux/store';
class QOpenAppButton extends Component {
    constructor(props) {
        super(props)
        this.openApp = this.openApp.bind(this)
    }
    openApp () {
		const appid= decodeURIComponent(this.props._appid)
        if (Object.keys(this.props._appid)!=null) {
           // window.open(`/app/${appid}`,"_blank");
			history.push(`/app/${appid}`)
        }else{
            
        }
    }
    render() {
        return ( 
			<button type="button" className="btn btn-primary" onClick={this.openApp}>Open App</button>
            
        );
    }
}


export default (QOpenAppButton);