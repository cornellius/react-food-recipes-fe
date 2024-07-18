import { useRef } from 'react';

const SearchBar = (props) => {
    let searchTerms = props.searchTerms;
    let updateSearchTerms = props.updateSearchTerms;
    let inputRef = useRef("");

    const handleClick = () => {
        updateSearchTerms(inputRef.current.value);
    }

    const handleKeyDown = (event) => {
        if(event.keyCode === 13) {
            updateSearchTerms(inputRef.current.value);
        }
    }

    return (
        <div style={{ padding: 10 }}>
            <div className="ui action input">
                <input 
                    type="text" ref={inputRef} 
                    placeholder="ingredient 1,ingredient 2..." 
                    onKeyDown={handleKeyDown}
                    defaultValue={searchTerms} />
                <button className="ui icon button" onClick={()=>handleClick()}>
                    <i className="search icon"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;