import { Component } from 'react';

import { getImages } from 'api/Images';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Buton/Button';
import Loader from 'components/Loader/Loader';
import NoResult from 'components/NoResults/NoResults';
import Modal from 'components/Modal/Modal';

class App extends Component {
  initialState = {
    images: [],
    page: 1,
    query: '',
    error: '',
    isLoading: false,
    loadMore: false,
    showModal: false,
    modalImageUrl: '',
  };

  state = { ...this.initialState };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.handleSearch();
    }
  }

  onSubmit = query => {
    if (this.state.query === query) {
      return;
    }

    this.setState({
      ...this.initialState,
      query: query,
    });
  };

  onLoadMore = page => {
    this.setState({ page: page });
  };

  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });

      const { data } = await getImages(this.state.query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: this.state.page < Math.ceil(data.totalHits / 12),
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error, isLoading: false });
    }
  };

  openModal = id => {
    const imageUrl = this.state.images.filter(image => image.id === id)[0]
      .largeImageURL;

    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImageUrl: imageUrl,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      isLoading,
      query,
      images,
      page,
      loadMore,
      showModal,
      modalImageUrl,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images?.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.openModal} />
        )}
        {loadMore && (
          <Button onLoadMore={this.onLoadMore} page={page}>
            Load more
          </Button>
        )}

        {images?.length === 0 && query && <NoResult />}
        {isLoading && <Loader />}
        {showModal && (
          <Modal imageUrl={modalImageUrl} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
