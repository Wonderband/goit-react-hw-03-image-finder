import PropTypes from "prop-types";
export const Modal = ({ imgUrl, showModal, hideModal }) => (
    <div className={`Overlay ${!showModal() ? "Hidden" : ""}`} onClick={hideModal}>
        <div className="Modal">
            <img src={imgUrl} alt="" />
        </div>
    </div>
)

Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired, 
}
    