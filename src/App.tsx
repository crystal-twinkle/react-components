import React from 'react';
import './assets/App.css';
import Search from './components/Search';
import PostList from './components/PostList';
import { IPost } from './components/models';
import PokemonApi from './API/api';

class App extends React.Component {
  state = {
    data: [],
    query: localStorage.getItem('search') || '',
  };

  search = (dates: IPost[], query: string) => {
    if (!query.length) {
      return dates;
    }
    return dates.filter((data) => {
      return data.name.indexOf(query) > -1;
    });
  };

  inputSearch = (query: string) => {
    this.setState({ query });
  };

  componentDidMount() {
    PokemonApi.getALL().then((data) => {
      this.setState({ data });
    });
  }

  serverGet = async () => {
    console.log(PokemonApi.getALL());
  };

  render() {
    const { data, query } = this.state;
    const foundItems: IPost[] = this.search(data, query);
    return (
      <div className="app">
        <button onClick={this.serverGet}>GET</button>
        <Search title="Write something" inputSearch={this.inputSearch} />
        <PostList posts={foundItems} title="You List" />
      </div>
    );
  }
}

export default App;
