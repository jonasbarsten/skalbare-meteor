import React from 'react';
import { Link } from 'react-router-dom';

import Image from './Image';

export default (props) => {

	const profile = props.profile;
	const numberOfPosts = profile.numberOfPosts ? profile.numberOfPosts : 0;
	const numberOfComments = profile.numberOfComments ? profile.numberOfComments : 0;
	const numberOfPhotos = profile.numberOfPhotos ? profile.numberOfPhotos : 0;
	const numberOfVideos = profile.numberOfVideos ? profile.numberOfVideos : 0;
	const customStatus = profile.customStatus ? profile.customStatus : '...';

	return (
		<div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
			<div className="ui-block">
				<div className="friend-item">
					<div className="friend-header-thumb">
						<Link to={`profile/${profile._id}`}>
							<Image id={profile.coverImage} size="318x122" alt="friend" />
						</Link>
					</div>
				
					<div className="friend-item-content">
						<div className="friend-avatar">
							<div className="author-thumb">
								<Link to={`profile/${profile._id}`}>
									<Image id={profile.profileImage} size="92x92" alt="author" />
								</Link>
							</div>
							<div className="author-content">
								<Link to={`profile/${profile._id}`} className="h5 author-name">{profile.nickName}</Link>
								<div className="country">{customStatus}</div>
							</div>
						</div>
				
						<div className="swiper-container" data-slide="fade">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className="friend-count" data-swiper-parallax="-500">
										<Link to={`profile/${profile._id}`} className="friend-count-item">
											<div className="h6">{numberOfPosts}</div>
											<div className="title">Poster</div>
										</Link>
										<a href="#" className="friend-count-item">
											<div className="h6">{numberOfPhotos}</div>
											<div className="title">Bilder</div>
										</a>
										<a href="#" className="friend-count-item">
											<div className="h6">{numberOfVideos}</div>
											<div className="title">Videoer</div>
										</a>
									</div>
									<div className="control-block-button" data-swiper-parallax="-100">
										<a href="#" className="btn btn-control bg-purple">
											<svg className="olymp-chat---messages-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use></svg>
										</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}