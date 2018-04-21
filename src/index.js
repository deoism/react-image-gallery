import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.js';
import imgUrls from './components/GalleryData';  



 let element = <Gallery className={'container'} url={imgUrls} />;
const target = document.querySelector('.galleryContainer');
ReactDOM.render(element, target);
 