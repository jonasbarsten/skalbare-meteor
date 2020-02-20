import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Profile from './Profile';

import './Home.css';

class Home extends Component {
	render() {

	  return (
	    <div className="Home">
        <div>
          {this.props.isAuthenticated ? 
            <Profile {...this.props} /> : 
            <div className="no-auth">
              <h1>Skal Bare</h1>
              <p>Når du bare skal ...</p>
              <Link to="/login" className="btn btn-info btn-lg">
                Login
              </Link>
            </div>
          }
        </div>
	    </div>
	  );
	}
}

export default Home;