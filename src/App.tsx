import React from 'react';
import './assets/App.css';
import Search from './components/Search';
import PostList from './components/PostList';
import { IPost } from './components/models';
import PokemonApi from './API/api';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {
  state = {
    data: [],
    isLoading: false,
    query: localStorage.getItem('search') || '',
    isError: false,
  };

  search = (dates: IPost[], query: string) => {
    localStorage.setItem('search', query);
    query = query.toLowerCase();
    if (!query.length) {
      return dates;
    }
    return dates.filter((data) => {
      return data.name.indexOf(query.trim()) > -1;
    });
  };

  search2 = () => {
    this.setState({ isLoading: false });
    PokemonApi.getByName().then((data) => {
      console.log(data);
    });
    this.setState({ isLoading: true });
  };

  inputSearch = (query: string) => {
    this.setState({ query });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
    PokemonApi.getALL().then((data: IPost[]) => {
      this.setState({ data });
      this.setState({ isLoading: true });
    });
  }

  some() {
    PokemonApi.getByName().then((data) => {
      console.log(data);
    });
  }

  errorClick = () => {
    this.setState({ isError: true });
    throw new Error('Test error');
  };

  render() {
    const { data, query, isLoading, isError } = this.state;
    const foundItems: IPost[] = this.search(data, query);
    if (isError) {
      return (
        <ErrorPage
          isErrorChange={(isError: boolean) => this.setState({ isError })}
        />
      );
    }
    return (
      <div className="app">
        <button className="error-btn" onClick={this.errorClick}>
          Generate Error
        </button>
        <Search title="Write something" inputSearch={this.inputSearch} />
        {isLoading ? (
          <PostList posts={foundItems} title="You List" />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
