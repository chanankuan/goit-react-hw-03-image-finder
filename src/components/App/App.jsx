import { Component } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    query: null,
    isLoading: false,
    loadMore: false,
    showModal: false,
    modalImageUrl: '',
    modalImageTags: '',
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

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSearch = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const { data } = await getImages(query, page);

      if (data.totalHits === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      if (page === 1) {
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      Notify.failure(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  openModal = (url, tags) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImageUrl: url,
      modalImageTags: tags,
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
      loadMore,
      showModal,
      modalImageUrl,
      modalImageTags,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />

        {images?.length > 0 && (
          <ImageGallery images={images} onOpenModal={this.openModal} />
        )}

        {loadMore && <Button onLoadMore={this.onLoadMore}>Load more</Button>}

        {images?.length === 0 && query && !isLoading && <NoResult />}
        {isLoading && <Loader />}

        <AnimatePresence>
          {showModal && (
            <Modal
              imageUrl={modalImageUrl}
              tags={modalImageTags}
              onClose={this.closeModal}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
}

export default App;
