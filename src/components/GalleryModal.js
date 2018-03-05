import React from 'react'; 
import {Modal, Button, Image } from 'react-bootstrap'; 
 // Component for gallery modal
class GalleryModal extends React.Component {
    render() {
      
     if (this.props.isopen === "false") {

      return null;
     }  
     console.log(" this isopen " + this.props.isopen)
 return(  
       <div className="static-modal responsive">
  <Modal.Dialog isopen={this.props.isopen} className={this.className}   >
  {this.showModal} 
    <Modal.Header>
    <Button onClick={this.props.closemodal} isopen={this.props.isopen} bsStyle="primary" bsSize="large" >Close</Button>
    
      <Modal.Title>
      {this.props.name}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>  
        <Image src={this.props.src}  className="img-responsive" rounded  responsive    /> 
    
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={this.props.closemodal} isopen={this.props.isopen} bsStyle="primary" bsSize="large" >Close</Button>
    
    </Modal.Footer>
  </Modal.Dialog>
</div>
       
     )
    }
   }
 
   export default GalleryModal;