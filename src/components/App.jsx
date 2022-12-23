import { Component } from 'react';
import Notiflix from 'notiflix';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getImages } from "services/getImages";
import { Button } from './Button/Button';

export class App extends Component  { 

  state = {
    searchTerm: '',
    perPage: 15,
    page: 1,
    images: [],
    imgTotalNumber: 0,
  }

  submitHandler = (e) => { 
    e.preventDefault();    
    const searchTerm = e.currentTarget.input.value;
    if (!searchTerm) { 
      Notiflix.Notify.failure(`Empty search!`);
      return;    
    }    
    this.setState(prevState => {
      if (prevState.searchTerm === searchTerm) return;
      return {searchTerm, page: 1, images: [], imgTotalNumber: 0}
    });    
  }

  showNextPage = () => { 
    this.setState(prevState => ( {page : prevState.page + 1}));
  }

  componentDidUpdate(_, prevState) { 
    console.log(this.state);
    if (this.state.searchTerm === prevState.searchTerm &&
      this.state.page === prevState.page) return;
    // if (this.state.searchTerm !== prevState.searchTerm) {
    //   this.setState({ images: [], page: 1, imgTotalNumber: 0});
    //  }
    const { searchTerm, perPage, page } = this.state;
    // console.log(searchTerm);
    getImages(searchTerm, perPage, page)
      .then(data => {
        // console.log(data);
        this.setState({ imgTotalNumber: data.totalHits });
        return data.hits;
      })
      .then(images => { 
      //  console.log(images);
        this.setState( prevState => ({ images: [...prevState.images, ...images] }));
        if (!images.length) Notiflix.Notify.failure(`No images found!`); 
        // return this.state;
      })
      // .then(res => console.log(res));  
  }

  render() {    
    return (
      <>
      <SearchBar submitHandler={this.submitHandler} />
      <ImageGallery images={this.state.images} />
      <Button imagesQtt={this.state.imgTotalNumber} page={this.state.page}
        perPage={this.state.perPage} loadMore={this.showNextPage } />        
      </>
    )    
  };
  
};
