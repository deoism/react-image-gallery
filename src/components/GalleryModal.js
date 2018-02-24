import React from 'react'; 
 
// Component for gallery modal
class GalleryModal extends React.Component {
    render() {
        console.log("this is props isopen :" +  (this.props.isopen)); 
     if (this.props.isopen === "false") {
      return null;
     }  
      console.log("is src? " + this.props.src);
     return(
      <div 
      isopen={this.props.isopen} 
      className='modal-overlay'  
      onClick={this.props.closeModal} 
      name={this.props.name}>
       <div className='modal-body'>
        <a className='modal-close'   >
        <span className='fa fa-times'> </span>    
        <img src={this.props.src} name={this.props.name} alt={this.props.alt}/>  
        </a>  
       </div>
      </div>
     )
    }
   } 

   export default GalleryModal;