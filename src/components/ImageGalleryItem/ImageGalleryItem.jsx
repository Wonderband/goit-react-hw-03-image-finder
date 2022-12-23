import PropTypes from "prop-types";
export const ImageGalleryItem = ({ image, clickHandler }) =>  (
      <li className="ImageGalleryItem" onClick={clickHandler}>
         <img className="ImageGalleryItem-image" src={image.webformatURL} data-modal={image.largeImageURL} alt={image.tags} />
      </li>
)

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
       id: PropTypes.number.isRequired,
       webformatURL: PropTypes.string.isRequired,
       largeImageURL: PropTypes.string.isRequired,
       tags: PropTypes.string.isRequired,
    }),
    clickHandler: PropTypes.func.isRequired,
}