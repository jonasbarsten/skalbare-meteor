import React from 'react';
import { Spinner } from "reactstrap";

export default () => {
	return (
		<div 
			className="row justify-content-center"
			style={{marginTop: "40px"}}
		>
			<div className="col-auto">
				<Spinner type="grow" color="dark" />
			</div>
		</div>
	);
}