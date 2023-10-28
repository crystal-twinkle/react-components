import React from 'react';
import './assets/App.css';
import Search from './components/Search';
import PostList from './components/PostList';
import { IPost } from './components/models';
import PokemonApi from './API/api';
import Loading from './components/Loading';

class App extends React.Component {
  state = {
    data: [],
    isLoading: false,
    query: localStorage.getItem('search') || '',
  };

  search = (dates: IPost[], query: string) => {
    localStorage.setItem('search', query);
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

  render() {
    const { data, query, isLoading } = this.state;
    const foundItems: IPost[] = this.search(data, query);
    return (
      <div className="app">
        <button onClick={this.some}>SOME</button>
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
