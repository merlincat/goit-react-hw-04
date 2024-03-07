import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import { Triangle } from 'react-loader-spinner';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

// import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // 1. Оголошуємо асинхронну функцію
    async function fetchImages() {
      const response = await axios.get(
        'https://api.unsplash.com/photos/?client_id=DCtBix4SwiSWaQzaGpttYzdj0XBjC4cDhCkRQNr_cSQ'
        // DCtBix4SwiSWaQzaGpttYzdj0XBjC4cDhCkRQNr_cSQ
      );
      console.log(response.data);
      setImages(response.data);
    }

    // 2. Викликаємо її одразу після оголошення
    fetchImages();
  }, []);

  return (
    <div>
      <ImageGallery />
      {images && (
        <ul>
          {images.map(({ id, urls, alt_description }) => (
            <li key={id}>
              <a href={urls.full} target="_blank" rel="noreferrer noopener">
                {alt_description}
              </a>
            </li>
          ))}
        </ul>
      )}
      {/* <SearchBar onSubmit={onSubmit}></SearchBar> */}
    </div>
  );
};

export default App;
