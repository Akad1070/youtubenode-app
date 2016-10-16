import React    from 'react';

import NavBar from '../components/bar/NavBar';
import SearchBar from '../components/bar/SearchBar';


export default class App extends React.Component {
    
    constructor (){
        super();
     }
  

  render(){
        return (
            <div id="wrapper">
                <NavBar />
            	<div id="page-wrapper" className="gray-bg">
                    <div className="row border-bottom">
            	        <SearchBar />
                    </div>
            	   
        	        <div className="wrapper wrapper-content">
                        {this.props.children}
                    </div>
                </div>
            </div>

      );
  }
};