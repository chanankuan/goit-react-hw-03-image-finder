import { Component } from 'react';

import { getImages } from 'api/Images';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Buton/Button';

class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    error: '',
    isLoading: false,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.handleSearch(this.state.query, this.state.page);
    }
  }

  onSubmit = query => {
    this.setState({
      images: [],
      page: 1,
      query: query,
      error: '',
      isLoading: false,
      loadMore: false,
    });
  };

  onLoadMore = page => {
    this.setState({ page: page });
  };

  handleSearch = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const { data } = await getImages(query, page);
      console.log(data.totalHits);
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

  render() {
    const { isLoading, images, page, loadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {images?.length > 0 && <ImageGallery images={images} />}
        {loadMore && (
          <Button onLoadMore={this.onLoadMore} page={page}>
            Load more
          </Button>
        )}

        {/* {images?.length === 0 && <h1>No images found</h1>} */}
        {isLoading && <h1>Loading...</h1>}
      </>
    );
  }
}

export default App;
