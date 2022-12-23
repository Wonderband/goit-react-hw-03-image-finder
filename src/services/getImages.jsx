import axios from 'axios';
export async function getImages( searchTerm, perPage, page ) {     
    const API_URL = "https://pixabay.com/api/"; 
    const config = new URLSearchParams({
            key: "31399452-9d47890bb90445954f5179866",
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            q: searchTerm,
            per_page: perPage,            
    });  
    try { 
        const response = await axios.get(`${API_URL}?page=${page}&${config}`);        
        return response.data;
    } 
    catch (err) {
        console.log(err.message);
        throw new Error(err.message);
    }  
}