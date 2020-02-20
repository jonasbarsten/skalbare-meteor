import React, { Component } from 'react';

import Images from '../../api/collections/images';

import ImageCropper from "./ImageCropper";
import Image from "../components/Image";

import './ProfileHeader.css';

class ProfileHeader extends Component {

	state = {
		profileImageFile: null,
		coverImageFile: null
	}

	profileImageClick () {
		this.refs.profileImage.click();
	}

	coverImageClick () {
		this.refs.coverImage.click();
	}

	handleImageFileChange (e, type) {

		e.preventDefault();

		if (e.currentTarget.files && e.currentTarget.files[0]) {
			const file = e.currentTarget.files[0];

			if (type === 'profileImage') {
				this.setState({profileImageFile: file});
			}

			if (type === 'coverImage') {
				this.setState({coverImageFile: file});
			}
		}
	}

	uploadImage (type, croppedAreaPixels) {

		let self = this;

		const file = this.state[`${type}File`];

		if (file) {
		  let uploadInstance = Images.insert({
		    file: file,
		    meta: {
		      // locator: self.props.fileLocator,
		      userId: Meteor.userId(), // Optional, used to check on server for file tampering
		      croppedAreaPixels: croppedAreaPixels
		    },
		    streams: 'dynamic',
		    chunkSize: 'dynamic',
		    allowWebWorkers: true // If you see issues with uploads, change this to false
		  }, false)

		  self.setState({
		    uploading: uploadInstance, // Keep track of this instance to use below
		    inProgress: true // Show the progress bar now
		  });

		  // These are the event functions, don't need most of them, it shows where we are in the process
		  // uploadInstance.on('start', function () {
		  //   console.log('Starting');
		  // });

		  // uploadInstance.on('end', function (error, fileObj) {
		  //   console.log('On end File Object: ', fileObj);
		  // });

		  uploadInstance.on('uploaded', function (error, fileObj) {
		    // console.log('uploaded: ', fileObj);

		    Meteor.call(`profile.update.${type}`, self.props.profile._id, fileObj._id);

		    // Remove the filename from the upload box
		    self.refs[type].value = '';

		    // Reset our state for the next file
		    self.setState({
		      uploading: [],
		      progress: 0,
		      inProgress: false,
		      profileImageFile: null,
		      coverImageFile: null,
		      // isUploading: false
		    });
		  })

		  uploadInstance.on('error', function (error, fileObj) {
		    console.log('Error during upload: ' + error)
		  });

		  uploadInstance.on('progress', function (progress, fileObj) {
		    // console.log('Upload Percentage: ' + progress)
		    // Update our progress bar
		    self.setState({
		      progress: progress
		    });
		  });

		  uploadInstance.start(); // Must manually start the upload
		};
	}

	render () {

		let profile = this.props.profile;
		console.log(profile.profileImage);
		const controls = this.props.ownProfile ? 
			<div className="control-block-button">

				<div className="btn btn-control bg-primary more">
					<svg className="olymp-settings-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-settings-icon" /></svg>

					<ul className="more-dropdown more-with-triangle triangle-bottom-right">
						<li>
							<a href="#" onClick={this.profileImageClick.bind(this)}>Bytt profilbilde</a>
						</li>
						<li>
							<a href="#" onClick={this.coverImageClick.bind(this)}>Bytt bakgrunnsbilde</a>
						</li>
						<li>
							<a href="#">Kontoinstillinger</a>
						</li>
					</ul>
				</div>
			</div> : null;

		return (
			<div className="ProfileHeader">
				<ImageCropper 
					file={this.state.profileImageFile} 
					aspect={1} 
					done={(croppedAreaPixels) => this.uploadImage('profileImage', croppedAreaPixels)} 
				/>

				<ImageCropper 
					file={this.state.coverImageFile} 
					aspect={3} 
					done={(croppedAreaPixels) => this.uploadImage('coverImage', croppedAreaPixels)} 
				/>

				<input 
					type="file"
					ref="profileImage"
					onChange={(e) => this.handleImageFileChange(e, 'profileImage')}
					hidden
				/>

				<input 
					type="file"
					ref="coverImage"
					onChange={(e) => this.handleImageFileChange(e, 'coverImage')}
					hidden
				/>

				<div className="row">
					<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="ui-block">
							<div className="top-header">
								<div className="top-header-thumb">
									<Image id={profile.coverImage} size="1920x640" />
								</div>

								<div className="profile-section">
									<div className="row">
										<div className="col col-lg-5 col-md-5 col-sm-12 col-12">
											<ul className="profile-menu">
												<li>
													<a href="02-ProfilePage.html" className="active">Poster</a>
												</li>
												<li>
													<a href="05-ProfilePage-About.html">Om</a>
												</li>
												<li>
													<a href="06-ProfilePage.html">Folk</a>
												</li>
											</ul>
										</div>
										<div className="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
											<ul className="profile-menu">
												<li>
													<a href="07-ProfilePage-Photos.html">Bilder</a>
												</li>
												<li>
													<a href="09-ProfilePage-Videos.html">Videoer</a>
												</li>
												<li>
													<div className="more">
														<svg className="olymp-three-dots-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-three-dots-icon" /></svg>
														<ul className="more-dropdown more-with-triangle">
															<li>
																<a href="#">Rapporter profil</a>
															</li>
															<li>
																<a href="#">Blokker profil</a>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>

									{controls}

								</div>
								<div className="top-header-author">
									<span className="author-thumb">
										<Image id={profile.profileImage} size="124x124" />
									</span>
									<div className="author-content">
										<a href="02-ProfilePage.html" className="h4 author-name">{profile.nickName}</a>
										<div className="country">{profile.customStatus}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileHeader;