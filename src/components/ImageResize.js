import React, { Component } from 'react'
import ResizeImage from 'react-resize-image'
 
class ImageResize extends Component {
    constructor(props){
        super(props);
        this.state ={
            resizeActive : true
        }
    }
  render () {
     console.log(this.props.options );

    return (
      <ResizeImage 
        resizeActive={this.state.resizeActive}
        src={this.props.src }  
        alt={this.props.alt}
        options={this.props.options}
      />
    )
  }
}
 
export default ImageResize