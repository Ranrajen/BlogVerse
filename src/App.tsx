// 1. Fixed the relative path typo (added the dot)
import './App.css';
import Header from './components/header/Header';
import NewPostButton from './components/newpost/NewPostButton';
import SearchBar from './components/search/SearchBar';

const App =() => {
  return (
    <div className='app'>     <Header />
      <div className="screen-split">
        <aside className="left-side">the side panel</aside>
        <main className="right-side">
          <SearchBar />
          <NewPostButton/>
          feed panel
        </main>
      </div>
    </div>
  );
}

export default App;
