import React from 'react';


import {validateInput} from '../../../../server/dao/User'
import InputBoxGroup from '../commons/InputBoxGroup';

export default class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            errors  : {},
            isLoading : false,
            email   : '',
            pwd     : ''
        }
        
        // Binding Events on the Form
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    
    isValid(){
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }
    
    onSubmit(e){
        e.preventDefault();
        if (this.isValid()) {
            this.setState({errors : {}, isLoading : true});
            this.props.userSignInRequest(this.state)
                    .then( // success : resolve()  otherwise reject()
                        () => { 
                            this.context.router.push('/');
                        }
                    ).catch(
                        (err) => this.setState({ errors: err.response.data, isLoading: false })
                    );
        }
    }
    
    
  
    render(){
        const {errors,isLoading} = this.state;
        
        return (
            <div className="panel login-panel panel-primary">
    			<div className="panel-heading">
    				<h3 className="panel-title center">Sign In</h3>
    			</div>
                		
                <form role="form" onSubmit={this.onSubmit}>
    				<div className="panel-body">
    					<InputBoxGroup
    					    name='email'
    					    label='Youtube Account Email'
    					    value={this.state.email}
    					    onChange={this.onChange}
    					    error={errors.email}
    					/>
    
    					<InputBoxGroup
    					    type='password'
    					    name='pwd'
    					    label='Password'
    					    value={this.state.pwd}
    					    onChange={this.onChange}
    					    error={errors.pwd}
    					/>
    				</div>
    				<div className="panel-footer">
    				    <button disabled={isLoading} className="btn btn-lg btn-block btn-outline btn-success">
    				        Sign In
    				    </button>
    				</div>
    			</form>
			</div>
      );
  }
}

// Specified the function which MUST be passed to this component
SignInForm.propTypes = {
    userSignInRequest : React.PropTypes.func.isRequired
}

SignInForm.contextTypes = {
    router : React.PropTypes.object.isRequired
}