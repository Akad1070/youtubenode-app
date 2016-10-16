import React from 'react';
import {connect} from 'react-redux';
import GoogleLogin from 'react-google-login';


import SignInForm from '../components/signin/SignInForm';
import { api } from '../../../server/utils/Config';
import {
  userSignInRequest, 
  userSignInGoogleRequest,
  userSignInGoogleRequestFailed
  
} from '../actions/UserActions';


class SignInPage extends React.Component {
  
  render(){
    const { 
      userSignInRequest, 
      userSignInGoogleRequest, 
      userSignInGoogleRequestFailed
      
    } = this.props;
    
    
    return (
      <div className="row animated fadeIn" data-icone="fa fa-lock">
        <div className="col-md-4 col-md-offset-4">
        	<SignInForm userSignInRequest={userSignInRequest} />
      	  <GoogleLogin
            clientId={api.clientID}
            buttonText="Sign in with Google"
            onSuccess={userSignInGoogleRequest}
            onFailure={userSignInGoogleRequestFailed}
          />
        </div>
      </div>
    );
  }
}


// Specified the function which MUST be passed to this component
// Will take from redux
SignInPage.propTypes = {
    userSignInRequest : React.PropTypes.func.isRequired,
    userSignInGoogleRequest : React.PropTypes.func.isRequired,
    userSignInGoogleRequestFailed : React.PropTypes.func.isRequired
    
};


// 
export default connect(null, {
  userSignInRequest,
  userSignInGoogleRequest,
  userSignInGoogleRequestFailed
  
})(SignInPage);