import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import $ from 'jquery';
import * as serviceWorker from "./serviceWorker";

// meteor npm install --save ev-emitter scrollmagic velocity sifter microplugin @fullcalendar/core @fullcalendar/daygrid desandro-matches-selector get-size fizzy-ui-utils outlayer masonry-layout isotope

// import 'jquery';
// import 'jquery.appear';
// import 'jquery-mousewheel';

// import 'material-design-lite';
// import './compability/test.js';


// import * as jQuery from './compability/js/jQuery/jquery-3.4.1.js';
// import './compability/js/libs/jquery.appear.js';
// import './compability/js/libs/jquery.mousewheel.js';
// import './compability/js/libs/perfect-scrollbar.js';
// import './compability/js/libs/jquery.matchHeight.js';
// import './compability/js/libs/svgxuse.js';
// import './compability/js/libs/imagesloaded.pkgd.js';
// import './compability/js/libs/Headroom.js';
// import './compability/js/libs/velocity.js';
// import './compability/js/libs/ScrollMagic.js';
// import './compability/js/libs/jquery.waypoints.js';
// import './compability/js/libs/jquery.countTo.js';
// import './compability/js/libs/popper.min.js';
// import './compability/js/libs/material.min.js';
// import './compability/js/libs/bootstrap-select.js';
// import './compability/js/libs/smooth-scroll.js';
// import './compability/js/libs/selectize.js';
// import './compability/js/libs/swiper.jquery.js';
// import './compability/js/libs/moment.js';
// import './compability/js/libs/daterangepicker.js';
// import './compability/js/libs/fullcalendar.js';
// import './compability/js/libs/isotope.pkgd.js';
// import './compability/js/libs/ajax-pagination.js';
// import './compability/js/libs/Chart.js';
// import './compability/js/libs/chartjs-plugin-deferred.js';
// import './compability/js/libs/circle-progress.js';
// import './compability/js/libs/loader.js';
// import './compability/js/libs/run-chart.js';
// import './compability/js/libs/jquery.magnific-popup.js';
// import './compability/js/libs/jquery.gifplayer.js';
// import './compability/js/libs/mediaelement-and-player.js';
// import './compability/js/libs/mediaelement-playlist-plugin.min.js';
// import './compability/js/libs/sticky-sidebar.js';
// import './compability/js/libs/ion.rangeSlider.js';
// import './compability/js/main.js';
// import './compability/js/libs-init/libs-init.js';
// import './compability/fonts/fontawesome-all.js';
// import './compability/Bootstrap/dist/js/bootstrap.bundle.js';


Meteor.startup(() => {
  $('body').addClass('page-has-right-panels');
});

import App from '../imports/ui/App';

Meteor.startup(() => {
	ReactDOM.render(
	  <Router>
			<App />
	  </Router>,
	  document.getElementById("app")
	);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();