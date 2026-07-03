// 1. Fixed the relative path typo (added the dot)
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='app'>     <Header />
      <div className="screen-split">
        <aside className="left-side">the side panel</aside>
        <main className="right-side">
          <SearchBar />
          feed panel
        </main>
      </div>
    </div>
  );
}

export default App;
