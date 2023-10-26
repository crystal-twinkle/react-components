import React, {FormEvent} from 'react';
import PropsDefault from "./model";

interface SearchProps extends PropsDefault {
    title: string;
}

interface SearchState {
    inputValue: string;
}

class Search extends React.Component<SearchProps, SearchState>{
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ inputValue: event.target.value });
    };

    render() {
        const { title } = this.props;
        const { inputValue } = this.state;

        return (
            <form className='search-form' onSubmit={(event:FormEvent)=>event.preventDefault()}>
                <span style={{textAlign: "center", fontWeight: "bold"}}> {title}</span>
                    <input
                        className="input"
                        type='text'
                        placeholder=''
                        onChange={this.inputHandler}
                        value={inputValue}
                    />
                    <button type='submit' className='search-btn'>
                        search
                    </button>
            </form>
        );
    }
}

export default Search;
