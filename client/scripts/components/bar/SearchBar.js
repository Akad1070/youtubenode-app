import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import { userSearch } from '../../actions/SearchActions';
import InputBoxGroup from '../commons/InputBoxGroup';

class SearchBar extends React.Component {
  
  constructor(props){
        super(props);
        this.state ={
            search  : '',
        }
        
        // Binding Events on the Form
        this.onSearch = this.onSearch.bind(this);
    }


  onSearch(){
    
  }
  


  render(){

    return (
        <nav className="navbar navbar-static-top" id='navbar-search' role="navigation">
          <div className="">
              <Link className="navbar-minimalize minimalize-styl-2 btn btn-primary" id='btn-minim-menu' to="/search">
                <i className="fa fa-bars"></i> 
              </Link>
              <form role="search" className="navbar-form-custom" id='form-search' onSubmit={this.onSearch}>
         					<InputBoxGroup
         					  className='form-control'
      					    name='top-search'
      					    placeholder="Search for something..."
      					    value={this.state.search}
      					    onChange={this.onSearch}
      					  />
              </form>
          </div>

        </nav>
    );
  }
};


SearchBar.propTypes = {
  // auth : React.PropTypes.object.isRequired,
  userSearch : React.PropTypes.func.isRequired
}


export default connect(null,{
  userSearch
})(SearchBar);
