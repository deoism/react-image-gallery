import React from 'react'; 
import { Image } from 'react-bootstrap'; 
import imgUrls from './GalleryContainer';
 // Component for gallery modal


 export default class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    render() {
  console.log(this.props.items);
      
   
    
      
     return( 
     <div id={"myCarousel"}
        className={"carousel slide"}
        data-interval={"2000"} 
        data-ride={"carousel"}>
         
          
        <a className={"carousel-control left"} href={"#myCarousel"} data-slide={"prev"}> 
        <span class={"glyphicon glyphicon-chevron-left"}></span></a>
        <a className={"carousel-control right"} href={"#myCarousel"} data-slide={"next"}> 
        <span class={"glyphicon glyphicon-chevron-right"}></span></a> 
          
    

    }
    </div>
     )}}
   