import React, { Component } from 'react';
import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';

import Modal from './Modal';

import './ImageCropper.css';

const readFile = (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  })
};

class ImageCropper extends Component {

	state = {
	  imageSrc: null,
	  crop: { x: 0, y: 0 },
	  zoom: 1,
	  aspect: 4 / 3,
	  croppedArea: null,
	  croppedAreaPixels: null
	}

	async componentDidUpdate (prevProps, prevState, snapshot) {

		if (prevProps === this.props) {
			return;
		}

		if (!this.props.file) {
			this.setState({imageSrc: null});
			return;
		}

		// No need to update on state change
		if (prevState !== this.state) {
			return;
		}

		const imageDataUrl = await readFile(this.props.file)
		this.setState({
		  imageSrc: imageDataUrl,
		  crop: { x: 0, y: 0 },
		  zoom: 1,
		  aspect: this.props.aspect
		});
	}

	onCropChange = crop => {
	  this.setState({ crop })
	}
	
	onCropComplete = (croppedArea, croppedAreaPixels) => {
	  this.setState({croppedAreaPixels});
	}
	
	onZoomChange = zoom => {
	  this.setState({ zoom })
	}

	done () {
		this.props.done(this.state.croppedAreaPixels);
	}

	render() {

		const open = this.state.imageSrc ? true : false;

	  return (
		  <Modal 
		  	buttonLabel="Save" 
		  	title="Resize / Crop"
		  	bodyHeight="480px"
		  	isOpen={open}
		  	apply={this.done.bind(this)}
		  >
	    	<div className="ImageCropper">
	    		<div className="crop-container">
	  	  		<Cropper
	  		      image={this.state.imageSrc}
	  		      crop={this.state.crop}
	  		      zoom={this.state.zoom}
	  		      aspect={this.state.aspect}
	  		      onCropChange={this.onCropChange}
	  		      onCropComplete={this.onCropComplete}
	  		      onZoomChange={this.onZoomChange}
	  		    />
	  		  </div>
	  		  <div className="controls">
	  		    <Slider
	  		      value={this.state.zoom}
	  		      min={1}
	  		      max={3}
	  		      step={0.1}
	  		      aria-labelledby="Zoom"
	  		      onChange={(e, zoom) => this.onZoomChange(zoom)}
	  		      className="slider"
	  		    />
	  		  </div>
	  		</div>
		  </Modal>
	  )
	}
}

export default ImageCropper;