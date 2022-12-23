import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, clickHandler}) => { 
    // console.log(images);
    return (
        <ul className="ImageGallery">        
            {images.map(image => <ImageGalleryItem image={image} key={image.id} clickHandler={clickHandler } />                 
            )}            
        </ul>);    

}