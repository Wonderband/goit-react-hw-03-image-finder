import PropTypes from "prop-types";
export const Button = ({ imagesQtt, page, perPage, loadMore }) => {    
    const imgLeft = imagesQtt > page * perPage;    
    if (imgLeft)
        return <button type="button" className="Button" onClick={loadMore}>Load more</button>;        
}

Button.propTypes = {
    imagesQtt: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    loadMore: PropTypes.func.isRequired,
}