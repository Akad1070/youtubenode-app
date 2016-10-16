import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';


import NavLink from './NavLink';
import {logOut } from '../../actions/UserActions';


class NavBar extends React.Component {

  logOut(e) {
    e.preventDefault();
    this.props.logOut();
  }


  render(){
   // const { isAuth, authType, user } = this.props;
    let isAuth = false, authType = 'Google', user = {};
    
    const userAvatar = (
      <li class="nav-header">
  			<div class="dropdown profile-element"> <span>
  				<img alt="Avatar" title='Avatar' class="img-circle avatar" src={user.avatar} />
  			</span>
  			<Link to='/user/me' className="dropdown-toggle">
  				<span class="clear"> 
  				  <span class="block m-t-xs"> 
  				    <strong class="font-bold">{user.name}</strong>
            </span> 
  				</span>
  			</Link>
  		</div>
  		<div class="logo-element">
  			<img alt="Avatar" title='User avatar' className="img-circle avatar" src={user.avatar} />
  		</div>
	  </li>
    );
  
    return (
      <nav className="menu-lateral navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
      		<ul className="nav metismenu" id="side-menu">
      		  {isAuth && userAvatar}
      		  <NavLink href='/' label='Home' icon='home text-navy fa-2x' />
            <NavLink href='/signin' label='Signin' icon='unlock '/>
            <NavLink href='/trends' label='Trends' icon='globe '/>
            {authType === 'Google' && (<NavLink href='/subscriptions' label='Subscriptions' icon='clock-o '/>)}
            {authType === 'Google' && (<NavLink href='/favorites' label='Liked' icon='thumbs-up '/>)}
      		</ul>
      	</div>
    	</nav>

    );
  }
};


NavBar.propTypes = {
  // auth : React.PropTypes.object.isRequired,
  logOut : React.PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    // isAuth : state.isAuth,
    user : state.user
  };
}

export default connect( mapStateToProps , {
  logOut
})(NavBar);
