import React, { Component } from 'react';

import Image from "../components/Image";

class PostCompose extends Component {

	handleStatusSubmit (e) {

		e.preventDefault();

		const value = this.refs.statusText.value;
		Meteor.call('post.add', this.props.profile, 'status', value, () => {
			this.refs.statusText.value = "";
		});
	}

	render () {

		const profile = this.props.profile;

		if (!profile) {
			return null;
		}

		return (
			<div>
				<div className="row">
					<main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
						<div className="ui-block">
							<div className="news-feed-form">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<a className="nav-link active inline-items" data-toggle="tab" href="#home-1" role="tab" aria-expanded="true">
											<svg className="olymp-status-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-status-icon"></use></svg>
											<span>Status</span>
										</a>
									</li>
									<li className="nav-item">
										<a className="nav-link inline-items" data-toggle="tab" href="#profile-1" role="tab" aria-expanded="false">
											<svg className="olymp-multimedia-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-multimedia-icon"></use></svg>
											<span>Bilde / video</span>
										</a>
									</li>
							
								</ul>
							
								<div className="tab-content">
									<div className="tab-pane active" id="home-1" role="tabpanel" aria-expanded="true">
										<form>
											<div className="author-thumb">
												<Image id={profile.profileImage} size="36x36" alt="author" />
											</div>
											<div className="form-group with-icon label-floating is-empty">
												<label className="control-label">Hva tenker du på? ...</label>
												<textarea ref="statusText" style={{paddingTop: "25px"}} className="form-control" placeholder=""></textarea>
											</div>
											<div className="add-options-message">
												<button className="btn btn-primary btn-md-2" onClick={this.handleStatusSubmit.bind(this)}>Publisér</button>
											</div>
							
										</form>
									</div>
							
									<div className="tab-pane" id="profile-1" role="tabpanel" aria-expanded="true">
										<form>
											<div className="author-thumb">
												<Image id={profile.profileImage} size="36x36" alt="author" />
											</div>
											<div className="form-group with-icon label-floating is-empty">
												<label className="control-label">Kommentar til bilde / video? ...</label>
												<textarea style={{paddingTop: "25px"}} className="form-control" placeholder=""  ></textarea>
											</div>
											<div className="add-options-message">
												<a href="#" className="options-message" data-toggle="tooltip" data-placement="top"   data-original-title="ADD PHOTOS">
													<svg className="olymp-camera-icon" data-toggle="modal" data-target="#update-header-photo"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
												</a>
												<button className="btn btn-primary btn-md-2">Publisér bilde / video</button>

											</div>
										</form>
									</div>
							
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default PostCompose;