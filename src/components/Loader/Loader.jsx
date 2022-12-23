// import css from './Loader.module.css'
import './Loader.css'
import PropTypes from "prop-types";
export const Loader = ({ isLoading }) => {    
    if (isLoading)         
        return (<div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div></div>);
}

Loader.propTypes = {    
    isLoading: PropTypes.bool.isRequired,
}
        
