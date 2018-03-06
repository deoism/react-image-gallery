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
      closeModal: {}
      
     }
    
     this.openModal = this.openModal.bind(this);
    
     this.closeModal = this.closeModal.bind(this);
    }
    
    render() {
   
     
     return( 


      <div refs='galleryContainer'  responsive>
        <GalleryModal    
          className={'col-sm-4 col-md-4 col-xs-4'}       
          isopen={this.state.isopen} 
          closemodal={this.closeModal}
          src={this.state.url}  
          alt={this.state.url}
          name={this.state.name}
          aria-labelledby="contained-modal-title"
       />
       <div className='row'>
        {
         // load remote  images with imgUrls[0] 
        //  load local images with imgUrls[1]
        imgUrls.imgUrls[0].map((url, index) => {
          let name='Image number ' + (index + 1);
          return <div  key={'image ' + (index + 1 )} 
          className='gallery-card col-sm-1 col-md-1 col-xs-3 '>
           
            <span isopen={this.state.isopen} 
            name={'Image number ' + (index + 1)}
            className='card-icon-open fa fa-expand' 
             value={url} onClick={(e) => this.openModal(name,url, e)}>

                <GalleryImage 
                rounded
                className='gallery-thumbnail' 
                src={url}  
                alt={'Image number ' + (index + 1)}
                isopen={this.state.isopen}


                 />
    
           </span>
         
           </div> 
        })
       }
      </div>
    
     </div>
     )
    }
   
   
    // Function for closing modal dialog
    closeModal() {
      console.log("closing Modal " );
     this.setState({
      showModal: "false",
      isopen: "false",
      url: '',
      name:'',
      alt:'', 
     })
    }

    
    // Function for opening modal dialog
    openModal(name,url, e) { 
      console.log("opening modal  " + url);
     this.setState({ 
      showModal:"true",
      isopen:"true",
      url: url, 
      name:name,
       closemodal:this.closeModal
     })
    };
   }


 export default Gallery;