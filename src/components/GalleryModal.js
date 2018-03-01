import React from 'react'; 
import {Modal, Button, Image , Grid, Row, Col} from 'react-bootstrap'; 
 // Component for gallery modal
class GalleryModal extends React.Component {
    render() {
      
     if (this.props.isopen === "false") {

      return null;
     }  
     console.log(" this isopen " + this.props.isopen)
 return(  
       <div className="static-modal">
  <Modal.Dialog isopen={this.props.isopen} className={this.className}  >
  {this.showModal} 
    <Modal.Header>
      <Modal.Title>
      {this.props.name}
      </Modal.Title>
    </Modal.Header>

    <Modal.Body> 
<Grid col-xs={2} col-md={2} col-sm={2}>
    <Row>
      <Col  >
        <Image src={this.props.src} circle    /> 
      </Col>
                </Row>
                </Grid>
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