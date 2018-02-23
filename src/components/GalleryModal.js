import React from 'react'; 

// Component for gallery modal
class GalleryModal extends React.Component {
    render() {
     if (this.props.isopen === false) {
      return null;
     }else{
      alert("is open? " + this.props.showModal);
     return(
      <div isopen={this.props.isopen} className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
       <div className='modal-body'>
        <a className='modal-close' href='#open' onClick={this.props.onClick}>
        <span className='fa fa-times'></span>
        </a>
    
        <img src={this.props.src} alt={this.props.alt}/>    
       </div>
      </div>
     )
    }
   }
}

   export default GalleryModal;