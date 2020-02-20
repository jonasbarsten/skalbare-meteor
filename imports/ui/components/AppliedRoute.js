import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, title: title, ...rest }) => {

	if (cProps.title !== title) {
		cProps.changeTitle(title);
	}

  return <Route {...rest} render={props => <C {...props} {...cProps} />} />;
}
