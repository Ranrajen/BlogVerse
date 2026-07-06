// 1. Fixed the relative path typo (added the dot)
import './App.css';
import Header from './components/header/Header';
import NewPostButton from './components/newpost/NewPostButton';
import SearchBar from './components/search/SearchBar';
import ReadingSpace from './components/readingSpace/ReadingSpace';
import PostsFeed from './components/postsfeed/PostsFeed';

import { useState } from 'react';
import type { Post } from './types/Post';
import { dummyPosts } from './data/dummyPosts';

import NewPostModal from './components/newpostmodal/NewPostModal';

const App = () => {
  const [selectedPost, setselectedPost] = useState<Post | null>(dummyPosts[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="app">
      {' '}
      <Header />
      <div className="screen-split">
        <aside className="left-side">
          {/* the side panel */}
          <ReadingSpace selectedPost={selectedPost} />
        </aside>
        <main className="right-side">
          <div className="top-bar">
            <SearchBar />
            <NewPostButton onClick={() => setIsModalOpen(true)} />
          </div>
          <PostsFeed onSelectPost={setselectedPost} />
        </main>
      </div>
      <NewPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;
