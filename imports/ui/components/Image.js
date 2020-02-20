import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Images from '../../api/collections/images';
import Loading from '../components/Loading';

class Image extends Component {

	state = {
		loading: false,
		loaded: false,
		url: null
	}

	componentDidUpdate(prevProps, prevState, snapshot) {

		if (!this.props.image) {
			return;
		}

		if (prevProps === this.props) {
			return;
		}

		// No need to check for image if only state has changed and not props
		if (prevState !== this.state) {
			return;
		}

		// Get image URL if image version exists
		if (this.props.image.versions[this.props.size]) {
			this.setState({url:this.props.image.link(this.props.size)});
			return;
		}

		// Convert Image
		this.convertImage(this.props.image._fileRef, this.props.image.link());

	}

	convertImage (imageRef, imageUrl) {

		this.setState({loading: true});

		Meteor.call('image.resize', imageRef, imageUrl, this.props.size, (err, res) => {
			
			if (err) {
				console.log(err);
				this.setState({loading: false});
			}

			if (res === 'done') {
				this.setState({loading: false, url:this.props.image.link(this.props.size)});
			}

		});
	
	}

	showImage = () => {
	  this.setState({loaded: true});
	}

	render () {

		const width = this.props.size.split('x')[0];
		const height = this.props.size.split('x')[1];

		return (
			<span>
				<img 
					src={`https://dummyimage.com/${width}x${height}/ff5e3a/fff.jpg`} 
					style={ this.state.loaded ? {display: "none"} : {}} 
				/>
				<img 
					src={this.state.url}
					className={this.props.className}
					alt={this.props.alt}
					style={ this.state.loaded ? {} : {display: "none"}}
					onLoad={this.showImage}
				/>
			</span>
		);
	}
}

export default withTracker((props) => {
  const handles = [
    Meteor.subscribe('files.images.all')
  ];
  const loading = handles.some(handle => !handle.ready());
  return {
    loading,
    imageId: props.id,
    image: (props.id === 'no image') ? null : Images.findOne({_id: props.id})
  };
})(Image);