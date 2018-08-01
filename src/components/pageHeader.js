import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from './../redux/store';
class PageHeader extends Component {
	constructor(props) {
        super(props)
        this.navigateUrl = this.navigateUrl.bind(this)
		
    }
	
    componentWillReceiveProps(nextProps) {
    }
        
    componentWillMount() {
		
    }
	navigateUrl(_url){
		
		history.push(`${_url.urllink}`)
		
	}
	
    
    render() {
		var self=this;
		var navlinks = [{"display":"Home","urllink":"/" },{"display":"Apps","urllink":"/apps" }]
		const links= navlinks.map(function(navlink){
			
			return <li className="nav-item" onClick={(e) => self.navigateUrl(navlink)}>
					<a className="nav-link">{navlink.display}</a>
				  </li>
			
			
		})
	
		return ( 
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			  <a className="navbar-brand" href="#">Codewander</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
				{links}
				  
				</ul>
				
			  </div>
			</nav>
        );
	}
}
export default (PageHeader);
