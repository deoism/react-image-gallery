import React from 'react';  

export default class Header extends React.Component{

 render(){
        return(
        <div id={'Gallery-Header'} >
              <div className={" galleryHeader"}>
                <h1>Image Collage</h1> 
                <p>Local and Remote images uploaded and displayed.</p>  
              <p>in code: images is local images and </p> 
              <p>in code: imagesRemote is displaying as well</p> 
            </div>
      </div>
         ) }


        }
