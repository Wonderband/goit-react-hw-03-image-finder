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

  componentDidUpdate(_, prevState) {     
    if (this.state.searchTerm === prevState.searchTerm &&
      this.state.page === prevState.page) return;  
    const { searchTerm, perPage, page } = this.state;    
    getImages(searchTerm, perPage, page)
      .then(data => {
        this.setState({ imgTotalNumber: data.totalHits });
        return data.hits;
      })
      .then(images => {
        if (!images.length) 
          Notiflix.Notify.failure(`No images found!`);        
        else
          this.setState(prevState => ({ images: [...prevState.images, ...images]}));        
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => this.setState({ isLoading: false }));
  }

  modalHandler = (e) => this.setState({ modalUrl: e.target.dataset.modal });      

  showModal = () => this.state.modalUrl.length > 0;
  
  hideModal = () => this.setState({ modalUrl: '' });
  
  showNextPage = () => this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));   

  render() {    
    return (
      <>
        <SearchBar submitHandler={this.submitHandler} />        
        <ImageGallery images={this.state.images} clickHandler={this.modalHandler} />
        <Loader isLoading={this.state.isLoading}/>
        <Button imagesQtt={this.state.imgTotalNumber} page={this.state.page}
          perPage={this.state.perPage} loadMore={this.showNextPage} /> 
        {this.showModal() && <Modal imgUrl={this.state.modalUrl} hideModal={this.hideModal} />}       
      </>
    )    
  };  
};
