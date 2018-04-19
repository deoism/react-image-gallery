import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.js';
 
import imgUrls from './components/GalleryContainer'; 



 let element =  <Gallery url={imgUrls} />;
 const target = document.querySelector('.galleryContainer');
 ReactDOM.render(element, target);