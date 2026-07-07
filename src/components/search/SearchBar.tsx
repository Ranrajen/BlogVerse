import './search.css';
interface SearchBarProps {
value:string;
onChange: (value:string)=>void;
}

function SearchBar({value , onChange,}:SearchBarProps) {
  return (
    <>
      <div className="search-bar">
        <input type="text "  value={value}
  onChange={(event) => onChange(event.target.value)}
  placeholder="Search posts..." />
        <button>Search</button>
      </div>
    </>
  );
}

export default SearchBar;
