import React from 'react';
import imgUrls  from './GalleryContainer';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';

 
// Component for gallery
class Gallery extends React.Component{
    constructor(props) {

     super(props);
    
     this.state = {
      showModal: "false",
      isopen: "false",
      url: '',
      name:'',
      alt:'',
      closeModal:{}
     }
    
     this.openModal = this.openModal.bind(this);
    
     this.closeModal = this.closeModal.bind(this);
    }
    
    render() {
     return( 
      <div refs='gallery-container' className='container-fluid gallery-container'>
       <GalleryModal 
        isopen={this.isopen} 
        name={this.state.name} 
        onClick={this.state.closeModal} 
        src={this.state.url}
        closeModal = {this.closeModal}
        /> 
       <div className='row'>
        {
          
         imgUrls.imgUrls.map((url, index) => {
//           alert(url)
          return <div key={'image ' + (index + 1 )} className='col-sm-6 col-md-3 col-xl-2'>
           <div className='gallery-card'>
            <span isopen={this.state.isopen} 
                name={'Image number ' + (index + 1)} 
            className='card-icon-open fa fa-expand' 
            value={url} 
            onClick={(e) => this.openModal(url, e)}>

                <GalleryImage 
                className='gallery-thumbnail' 
                onclick={this.showModal}  
                src={url} 
                alt={'Image number ' + (index + 1)} />
    
           </span>
         
           </div>
         </div>
        })
       }
      </div>
    
     </div>
     )
    }
   
    // Function for opening modal dialog
    openModal(url, e) {
      console.log("opening modal  " + url);
     this.setState({
      showModal:"true",
      url: url, 
      
     })
    };
   
    // Function for closing modal dialog
    closeModal() {
      console.log("closing Modal " );
     this.setState({
      showModal: "false",
      url: ''
     })
    }
   }


 export default Gallery;