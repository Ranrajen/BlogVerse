// 1. Fixed the relative path typo (added the dot)
import './App.css';
import Header from './components/header/Header';
import NewPostButton from './components/newpost/NewPostButton';
import SearchBar from './components/search/SearchBar';
import ReadingSpace from './components/readingSpace/ReadingSpace'

const App = () => {
  return (
    <div className="app">
      {' '}
      <Header />
      <div className="screen-split">
        <aside className="left-side">the side panel  
          <ReadingSpace></ReadingSpace>
        </aside>
        <main className="right-side">
          <div className='top-bar'><SearchBar />
          <NewPostButton /></div>
          feed panel
        </main>
      </div>
    </div>
  );
};

export default App;
