import './readingSpace.css';

const ReadingSpace = () => {
  return (
    <section className='reading-space'>
      <div className='reading-header'>
        <h2>READING SPACE</h2>
      </div>

      <div className='empty-space'>
        <div className='book-icon'>📖</div>
        <h3>No Post Selected </h3>
        <p>select a post form the feed to read it complete content here.</p>
      </div>
    </section>
  );
};

export default ReadingSpace;
