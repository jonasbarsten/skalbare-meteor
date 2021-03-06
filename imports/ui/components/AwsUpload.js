import React, { Component } from 'react';
import { HTTP } from 'meteor/http';
import 'blueimp-file-upload/js/vendor/jquery.ui.widget.js';
// import 'blueimp-file-upload';
// import 'blueimp-load-image';
// import 'blueimp-canvas-to-blob';
import 'blueimp-file-upload/js/jquery.iframe-transport.js';
import 'blueimp-file-upload/js/jquery.fileupload.js';
// import 'blueimp-file-upload/js/jquery.fileupload-ui.js';
// import 'blueimp-file-upload/js/jquery.fileupload-process.js';
// import 'blueimp-file-upload/js/jquery.fileupload-image.js';


// elementId - required
// postUploadMethod - required
// image
// multiple

class awsUpload extends Component {

	componentDidMount() {

		const id = `#${this.props.elementId}`;

		// $('#fileupload').fileupload();

		console.log(id);

		$(id).fileupload({
			// acceptFileTypes: /(gif|jpe?g|png)$/i,
			// maxFileSize: maxFileSize,
			disableImageResize: false,
			paramName: 'file',
			add: this.s3Add.bind(this),
			dataType: 'xml',
			done: this.s3Done.bind(this),
			progressall: function (e, data) {
            	var progress = parseInt(data.loaded / data.total * 100, 10);
            	$('#progress .progress-bar').css(
                	'width',
                	progress + '%'
            	);
        	}
		});

	}

	s3Add (e, data) {

		$('#progress').css('display', 'block');

		const type = this.props.image ? 'image' : 'file';

		var params = [];

		data.files.map((file) => {

			const fileName = file.name;

			Meteor.call('file.generateUploadTicket', fileName, type, (err, res) => {
				if (err) {
					console.log(err);
				} else {
					data.url = res.endpoint_url;
					data.formData = res.params;

					// Upload file
					data.submit();
				}
			});

		});

		return params;
	}

	s3Done (e, data) {

		$('#progress').css('display', 'none');

		const file = {
			awsKey: data.formData.key,
			name: data.files[0].name,
			size: data.files[0].size,
			type: data.files[0].type
		};

		// Attach file reference to relevant document
		Meteor.call(this.props.postUploadMethod, file, (err, res) => {
			if (err) {
				console.log(err);
			} else {
				Bert.alert('File uploaded', 'success', 'growl-bottom-right', 'fa-smile-o');
				$('#progress .progress-bar').css('width','0%');
			}
		});
	}

	render () {

		const multiple = this.props.multiple ? true : false;
		const accept = this.props.image ? "image/*" : '*';

		// return (
		// 	<div>
		// 		<input id="fileupload" />
		// 	</div>
		// )

		return (
			<div>
				<form>
					<input 
						id={this.props.elementId}
						type="file"
						accept={accept} 
						style={{display: 'none'}}
						multiple={multiple}
					/>
				</form>
				<div id="progress" className="progress" style={{display: 'none'}}>
					<div className="progress-bar progress-bar-success"></div>
				</div>
			</div>
		);
	}
}

export default awsUpload;