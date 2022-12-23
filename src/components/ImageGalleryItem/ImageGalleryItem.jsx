export const ImageGalleryItem = ({image, clickHandler}) => { 
   return  (
      <li className="ImageGalleryItem" onClick={clickHandler}>
         <img className="ImageGalleryItem-image" src={image.webformatURL} data-modal={image.largeImageURL} alt={image.tags} />
        </li>
            )
}