import React from 'react';
import './assets/App.css'
import Search from "./components/Search";
import PostList from "./components/PostList";
import PropsDefault from "./components/models";


class App extends React.Component {

    state = {
        data: [{id: "1", title: 'afa', body: 'b'}, {id: "2", title: 'aa', body: 'bsa'}],
        query: ""
    }

    search = (dates: PropsDefault[], query: string) => {
        if (!query.length) {
            return dates;
        }
        return dates.filter((data: PropsDefault) => {
            return data.title.indexOf(query) > -1;
        })
    }

    inputSearch = (query: string) => {
        console.log(query);
        this.setState({query});
    }

    render() {
        const {data, query} = this.state;
        const foundItems = this.search(data, query);
        return (
            <div className="app">
                <Search title="Write something" inputSearch={this.inputSearch}/>
                <PostList posts={foundItems} title="You List"/>
            </div>
        )
    }
}

export default App
