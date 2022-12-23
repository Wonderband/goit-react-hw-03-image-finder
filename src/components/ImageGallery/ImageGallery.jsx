import PropTypes from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, clickHandler}) => (
    <ul className="ImageGallery">        
        {images.map(image => <ImageGalleryItem image={image} key={image.id} clickHandler={clickHandler } />                 
        )}            
    </ul>
);  

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
    clickHandler: PropTypes.func.isRequired,
}


