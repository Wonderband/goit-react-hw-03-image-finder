import { Component } from 'react';
import PropTypes from "prop-types";

export class Modal extends Component {     
    
    onEscape = (e) => { if (e.key === 'Escape') this.props.hideModal() }  
    
    onClick = (e) => { if (e.target === e.currentTarget) this.props.hideModal() } 

    componentDidMount() {         
        window.addEventListener("keydown", this.onEscape);   
    }

    componentWillUnmount() { 
        window.removeEventListener("keydown", this.onEscape);
    }

    render() {
        return (
            <div className="Overlay" onClick={this.onClick}>
                <div className="Modal">
                    <img src={this.props.imgUrl} alt="" />
                </div>
            </div>);
    }
}

Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,    
    hideModal: PropTypes.func.isRequired, 
}
    