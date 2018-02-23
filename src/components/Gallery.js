import React from 'react';
import imgUrls  from './GalleryContainer';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';

 
// Component for gallery
class Gallery extends React.Component{
    constructor(props) {

     super(props);
    
     this.state = {
      showModal: false,
      url: ''
     }
    
     this.openModal = this.openModal.bind(this);
    
     this.closeModal = this.closeModal.bind(this);
    }
    
    render() {
     return(
       console.log(imgUrls),
      <div refs='gallery-container' className='container-fluid gallery-container'>
       <div className='row'>
        {
         imgUrls.imgUrls.map((url, index) => {
          return <div key={'image' + (index + 1 )} className='col-sm-6 col-md-3 col-xl-2'>
           <div className='gallery-card'>
            <span isopen={this.props.isOpen} 
            className='card-icon-open fa fa-expand' 
            value={url} 
            onClick={(e) => this.openModal(url, e)}>
             <GalleryImage className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
    
           </span>
           </div>
         </div>
        })
       }
      </div>
    
      <GalleryModal iso pen={this.state.showModal} onClick={this.closeModal} src={this.state.url} /> 
     </div>
     )
    }
   
    // Function for opening modal dialog
    openModal(url, e) {
     this.setState({
      showModal: true,
      url: url
     })
    };
   
    // Function for closing modal dialog
    closeModal() {
     this.setState({
      showModal: false,
      url: ''
     })
    }
   }


 export default Gallery;