import './search.css';

function SearchBar() {
  return (
    <>
      <div className="search-bar">
        {' '}
        <input type="text " placeholder="search the blog" />
        <button>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
