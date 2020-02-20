import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Loading from '../components/Loading';
import ProfileCard from '../components/ProfileCard';
import Profiles from '../../api/collections/profiles';

class ProfileCardList extends Component {
	render () {

		if (this.props.loading) {
			return <Loading />
		}

		const profiles = this.props.profiles;
		const numberOfProfiles = profiles.length;

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<div className="ui-block responsive-flex">
								<div className="ui-block-title">
									<div className="h6 title">Andre folk ({numberOfProfiles})</div>
									<form className="w-search">
										<div className="form-group with-button">
											<input className="form-control" type="text" placeholder="Søk folk ..." />
											<button>
												<svg className="olymp-magnifying-glass-icon"><use xlinkHref="/theme/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">

						{profiles.map((profile) => {
							return <ProfileCard profile={profile} key={profile._id} />
						})}

					</div>
				</div>

			</div>
		);
	}
}

export default withTracker((props) => {
	const handles = [
	  Meteor.subscribe('profiles.all')
	];
	const loading = handles.some(handle => !handle.ready());
	return {
		loading,
		profiles: Profiles.find({_id: {$ne: props.profile._id}}).fetch()
	};

})(ProfileCardList);