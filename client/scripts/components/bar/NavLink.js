import React from 'react';
import {Link} from 'react-router';


export default class NavLink extends React.Component {
  
  render(){
      return (
        <li>
      	  <Link to={this.props.href} title={this.props.label}>
      		  <i className={"fa fa-"+this.props.icon + ' text-navy fa-2x'}></i>
      			<span className="title nav-label">{this.props.label}</span>
      		</Link>
      	</li>
      );
  }
};
