import { Component } from 'react';
import Notiflix from 'notiflix';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { getImages } from "services/getImages";
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component  { 

  state = {
    searchTerm: '',
    perPage: 15,
    page: 1,
    images: [],
    imgTotalNumber: 0,
    modalUrl: '',
    isLoading: false,
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
      return {searchTerm, page: 1, images: [], imgTotalNumber: 0, isLoading: true}
    });    
  }

  modalHandler = (e) => { 
    // console.log(e.target.dataset.modal);
    this.setState({ modalUrl: e.target.dataset.modal });
    const listen = window.addEventListener("keydown", (e) => {
      if (e.key === 'Escape') { 
        this.setState({ modalUrl: '' });
        window.removeEventListener("keydown", listen);
      }
        
  
  // do something
});
  }

  showModal = () => { return this.state.modalUrl.length > 0 }
  
  hideModal = () => (this.setState({modalUrl: ''}));

  showNextPage = () => { 
    this.setState(prevState => ( {page : prevState.page + 1}));
  }

  componentDidUpdate(_, prevState) { 
    // console.log(this.state.isLoading);
    if (this.state.searchTerm === prevState.searchTerm &&
      this.state.page === prevState.page) return;  
    const { searchTerm, perPage, page } = this.state;
    // this.setState({isLoading: true});    
    getImages(searchTerm, perPage, page)
      .then(data => {
      //   console.log(this.state.isLoading);
        this.setState({ imgTotalNumber: data.totalHits });
        return data.hits;
      })
      .then(images => { 
      // console.log(this.state.isLoading);
        this.setState( prevState => ({ images: [...prevState.images, ...images] }));
        if (!images.length) Notiflix.Notify.failure(`No images found!`); 
        // return this.state;
        this.setState({isLoading : false})
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      // .finally(this.setState({isLoading : false}))
      // .then(res => console.log(res));    
  }

  render() {    
    return (
      <>
        <SearchBar submitHandler={this.submitHandler} />
        <Loader isLoading={this.state.isLoading}/>
        <ImageGallery images={this.state.images} clickHandler={this.modalHandler } />
        <Button imagesQtt={this.state.imgTotalNumber} page={this.state.page}
          perPage={this.state.perPage} loadMore={this.showNextPage} /> 
        <Modal imgUrl={this.state.modalUrl} showModal={this.showModal} hideModal={this.hideModal} />
        
      </>
    )    
  };
  
};
