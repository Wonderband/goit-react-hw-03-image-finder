// import css from './Loader.module.css'
import './Loader.css'
export const Loader = ({ isLoading }) => {
    console.log(isLoading);
    if (isLoading)
        return (<div className='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div></div>);
 }

