import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images}) => { 
    // console.log(images);
    return (
        <ul className="ImageGallery">        
            {images.map(image => <ImageGalleryItem image={image} key={image.id } />                 
            )}            
        </ul>);    

}