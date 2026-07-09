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
  const [posts, setPosts] = useState<Post[]>(dummyPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(dummyPosts[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // --- editing useState
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  // -- for the filter
  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handlePublish = (title: string, content: string, postId?: string) => {
    if (postId) {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                title,
                content,
                updatedAt: new Date().toLocaleDateString(),
              }
            : post
        )
      );

      return;
    }

    const newPost: Post = {
      id: Date.now().toString(),
      title,
      content,
      category: 'General',
      tags: [],
      author: 'Rajen',
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);

    setSelectedPost(newPost);

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setPosts((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== id);

      if (selectedPost?.id === id) {
        setSelectedPost(updatedPosts[0] ?? null);
      }

      return updatedPosts;
    });
  };

  return (
    <div className="app">
      <Header />
      <div className="screen-split">
        <aside className="left-side">
          {/* the side panel */}
          <ReadingSpace selectedPost={selectedPost} />
        </aside>
        <main className="right-side">
          <div className="top-bar">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <NewPostButton
              onClick={() => {
                setEditingPost(null);
                setIsModalOpen(true);
              }}
            />
          </div>
          <PostsFeed
            posts={filteredPosts}
            onSelectPost={setSelectedPost}
            onDeletePost={handleDelete}
          />
        </main>
      </div>
      <NewPostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPublish={handlePublish}
        mode={editingPost ? 'edit' : 'create'}
        post={editingPost}
      />
    </div>
  );
};

export default App;
