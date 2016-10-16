import React from 'react';
import classnames from 'classnames';



export default function InputBoxGroup({name,type,label,value,error,placeholder,onChange}){
    return (
        <div className={classnames("form-group", {'has-error' : error})}>
			 {label && (<label for="email">{label} </label>)}
			<input 
			    className="form-control"
			    name={name}    type={type} 
			    placeholder={placeholder} 
			    value={value}
			    onChange={onChange}
		    />
		    {error && <span className='help-block'>{error}</span>}
		</div>
        
    );
}

InputBoxGroup.propTypes = {
    name    : React.PropTypes.string.isRequired,
    type    : React.PropTypes.string.isRequired,
    label   : React.PropTypes.string,
    value   : React.PropTypes.string.isRequired,
    error   : React.PropTypes.string,
    placeholder   : React.PropTypes.string,
    
    onChange   : React.PropTypes.func.isRequired,
    
}

InputBoxGroup.defaultProps = {
    type : 'text'
}