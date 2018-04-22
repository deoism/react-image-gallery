import React from 'react';  
import imgUrls  from './GalleryData';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import Header from './Header';
 require('../css/style.css');

 
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

      <section 
       className={'grid-template-rows  '}   >
        <Header/>
        <GalleryModal    
          className={'modal-dialogue modal fade'}       
          isopen={this.state.isopen} 
          closemodal={this.closeModal}
          src={this.state.url}  
          alt={this.state.url}
          name={this.state.name}
          aria-labelledby={"contained-modal-title"}
       />
       <div className={'gallery-card '}>
        {
         // all  images with imgUrls[0]
         // local images imgUrls  
        imgUrls.imgUrls.map((url, index) => {
          let name='Image number ' + (index + 1);
        return <div key={'image ' + (index + 1 )} 
          className='card-icon-open col-sm-4 col-md-3  col-lg-2  col-xl-1'>
           
            <span isopen={this.state.isopen} 
            name={name}
            className={'gallery-thumbnail ' }
             value={url}
             
                onClick={(e) => this.openModal(name,url, e)} >

                <GalleryImage 
                rounded
                className={'img-responsive'} 
                src={url}  
                alt={name}
                isopen={this.state.isopen}
                options={{"width":'100%'}}
                 />
    
           </span>
         
           </div> 
        })
       }
      </div>
    <div className={'footer'}>

      <h3>
        Anthony Dickerson
        <br/ >
       ~347 935 1813~
      </h3>
      <p>
        React, Node, css3, html5
      </p>
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