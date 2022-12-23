export const Modal = ({ imgUrl, showModal, hideModal }) => {
    
    return (<div className={`Overlay ${!showModal() ? "Hidden" : ""}`} onClick={hideModal}>
        <div className="Modal">
            <img src={imgUrl} alt="" />
        </div>
    </div>
    )
}
    