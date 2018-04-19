import React from 'react';  
import imgUrls  from './GalleryContainer';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import Header from './Header';
require('../css/style.scss');


 
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

      <section id="crank"   >
        <Header/>
        <GalleryModal    
          className={'modal-dialogue modal fade col-lg-3} '}       
          isopen={this.state.isopen} 
          closemodal={this.closeModal}
          src={this.state.url}  
          alt={this.state.url}
          name={this.state.name}
          aria-labelledby="contained-modal-title"
       />
       <div className='row'>
        {
         // all  images with imgUrls[0]
         // local images imgUrls  
        imgUrls.imgUrls.map((url, index) => {
          let name='Image number ' + (index + 1);
        return <div  key={'image ' + (index + 1 )} 
          className='gallery-card '>
           
            <span isopen={this.state.isopen} 
            name={name}
            className='card-icon-open col-xs-2 col-sm-1 col-md-1 ' 
             value={url}
             
                onClick={(e) => this.openModal(name,url, e)} >

                <GalleryImage col-sm-1 col-md-1 col-lg-1
                rounded
                className='gallery-thumbnail' 
                src={url}  
                alt={name}
                isopen={this.state.isopen}

                 />
    
           </span>
         
           </div> 
        })
       }
      </div>
    
     </section>
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