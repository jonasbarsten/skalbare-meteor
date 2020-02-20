import fs from 'fs-extra';
import gm from 'gm';

import Images from '../collections/images';

Meteor.methods({
	async 'image.resize' (imageRef, imageUrl, size) {

		if (!this.userId) {
			// Not logged in
			return;
		}

		const newWidth = Number(size.split('x')[0]);
		const newHeight = Number(size.split('x')[1]);
		const newRatio = newWidth / newHeight;
		const newPath = Images.storagePath() + '/' + size + '-' + imageRef._id + '.' + imageRef.extension;
		const userHasCropped = imageRef.meta.croppedAreaPixels ? true : false;
		let userWidth = null;
		let userHeight = null;
		let userRatio = null;
		let userCropX = null;
		let userCropY = null;
		let userCenterX = null;
		let userCenterY = null;
		let originalImageWidth = null;
		let originalImageHeight = null;
		let originalImageCenterX = null;
		let originalImageCenterY = null;
		let resize = null;

		const image = gm(imageUrl)
	  	.quality(70)
	    .define('filter:support=2')
	    .define('jpeg:fancy-upsampling=false')
	    .define('jpeg:fancy-upsampling=off')
	    .define('png:compression-filter=5')
	    .define('png:compression-level=9')
	    .define('png:compression-strategy=1')
	    .define('png:exclude-chunk=all')
	    .autoOrient()
	    .noProfile()
	    .strip()
	    .dither(false)
	    .interlace('Line')
	    .filter('Triangle');

	  if (userHasCropped) {
	  	userWidth = imageRef.meta.croppedAreaPixels.width;
	  	userHeight = imageRef.meta.croppedAreaPixels.height;
			userRatio = Math.round(userWidth / userHeight);
			userCropX = imageRef.meta.croppedAreaPixels.x;
			userCropY = imageRef.meta.croppedAreaPixels.y;
			userCenterX = userCropX + (userWidth / 2);
			userCenterY = userCropY + (userHeight / 2);
	  };


	  // User has cropped and ratio is equal to requested ratio

	  if (userHasCropped && userRatio === newRatio) {
			resize = () => {
			  return new Promise((resolve, reject) => {
			    image
			    	.crop(userWidth, userHeight, userCropX, userCropY)
			    	.resize(newWidth, newHeight)
			      .write(newPath, (err) => {
			        if (err) {
			          reject(err);
			        } else {
			          resolve()
			        }
			      })
			  })
	  	}
	  };

	  // User has cropped, but ratio is different from requested ratio

    if (userHasCropped && userRatio !== newRatio) {
  		resize = () => {
  		  return new Promise((resolve, reject) => {
  		    image
  		    	.crop(newWidth, newHeight, (userCenterX - (newWidth / 2)), (userCenterY - (newHeight / 2)))
  		    	.resize(newWidth, newHeight)
  		      .write(newPath, (err) => {
  		        if (err) {
  		          reject(err);
  		        } else {
  		          resolve()
  		        }
  		      })
  		  })
    	}
    };


    // User has not cropped and we crop to requested ratio from center image

    if (!userHasCropped) {

    	const getOriginalImageInfo = () => {
    		return new Promise((resolve, reject) => {
    			image.size((err, res) => {
    				if (err) {
    					reject(err);
    				} else {
    					resolve(res);
    				}
    			})
    		})
    	};

    	const originalImgInfo = await getOriginalImageInfo();

    	originalImageWidth = originalImgInfo.width;
    	originalImageHeight = originalImgInfo.height;
    	originalImageCenterX = originalImageWidth / 2;
    	originalImageCenterY = originalImageHeight / 2;

			resize = () => {
			  return new Promise((resolve, reject) => {
			    image
			    	.crop(newWidth, newHeight, (originalImageCenterX - (newWidth / 2)), (originalImageCenterY - (newHeight / 2)))
			    	.resize(newWidth, newHeight)
			      .write(newPath, (err) => {
			        if (err) {
			          reject(err);
			        } else {
			          resolve()
			        }
			      })
			  })
	  	};

    }

	  await resize();

		const getNewImageInfo = () => {
			return new Promise((resolve, reject) => {
				gm(newPath).size((err, res) => {
					if (err) {
						reject(err);
					} else {
						resolve(res);
					}
				})
			})
		};

		const stat = await fs.stat(newPath);
		const newImgInfo = await getNewImageInfo();
		const originalImage = await Images.findOne({_id: imageRef._id});

		const upd = { $set: {} };

    upd.$set[`versions.${size}`] = {
      path: newPath,
      size: stat.size,
      type: originalImage._fileRef.type,
      extension: originalImage._fileRef.extension,
      name: originalImage._fileRef.name,
      meta: {
        width: newImgInfo.width,
        height: newImgInfo.height
      }
    };

    await Images.collection.update(imageRef._id, upd);

    return 'done';



		/////////////  OLD  /////////////

		// console.log('square ' + square);

		// const width = Number(size.split('x')[0]);
		// const height = Number(size.split('x')[1]);
		// const newPath = Images.storagePath() + '/' + size + '-' + imageRef._id + '.' + imageRef.extension;

		// const image = gm(imageUrl)
	 //  	.quality(70)
	 //    .define('filter:support=2')
	 //    .define('jpeg:fancy-upsampling=false')
	 //    .define('jpeg:fancy-upsampling=off')
	 //    .define('png:compression-filter=5')
	 //    .define('png:compression-level=9')
	 //    .define('png:compression-strategy=1')
	 //    .define('png:exclude-chunk=all')
	 //    .autoOrient()
	 //    .noProfile()
	 //    .strip()
	 //    .dither(false)
	 //    .interlace('Line')
	 //    .filter('Triangle');

	 //  const getOriginalImageInfo = () => {
	 //  	return new Promise((resolve, reject) => {
	 //  		image.size((err, res) => {
	 //  			if (err) {
	 //  				reject(err);
	 //  			} else {
	 //  				resolve(res);
	 //  			}
	 //  		})
	 //  	})
	 //  };

	 //  const originalImgInfo = await getOriginalImageInfo();

	 //  let resize = null;

	 //  if (square) {
	 //  	resize = () => {
	 //  		let x = 0;
  //       let y = 0;

  //       const widthRatio  = originalImgInfo.width / width;
  //       const heightRatio = originalImgInfo.height / width;
  //       let widthNew      = width;
  //       let heightNew     = width;

  //       if (heightRatio < widthRatio) {
  //         widthNew = (width * originalImgInfo.width) / originalImgInfo.height;
  //         x = (widthNew - width) / 2;
  //       }

  //       if (heightRatio > widthRatio) {
  //         heightNew = (width * originalImgInfo.height) / originalImgInfo.width;
  //         y = (heightNew - width) / 2;
  //       }

  //       return new Promise((resolve, reject) => {
  //         image
  //         	.resize(widthNew, heightNew)
  //         	.crop(width, width, x, y)
  //           .write(newPath, (err) => {
  //             if (err) {
  //               reject(err);
  //             } else {
  //               resolve()
  //             }
  //           });
  //       });

	 //  	}
	 //  } else {
	 //  	resize = () => {
	 //  	  return new Promise((resolve, reject) => {
	 //  	    image
	 //  	    	.resize(width, height)
	 //  	      .write(newPath, (err) => {
	 //  	        if (err) {
	 //  	          reject(err);
	 //  	        } else {
	 //  	          resolve()
	 //  	        }
	 //  	      })
	 //  	  })
	 //  	};
	 //  }

		// await resize();

		// const getNewImageInfo = () => {
		// 	return new Promise((resolve, reject) => {
		// 		gm(newPath).size((err, res) => {
		// 			if (err) {
		// 				reject(err);
		// 			} else {
		// 				resolve(res);
		// 			}
		// 		})
		// 	})
		// };

		// const stat = await fs.stat(newPath);
		// const newImgInfo = await getNewImageInfo();
		// const originalImage = await Images.findOne({_id: imageRef._id});

		// const upd = { $set: {} };

  //   upd.$set[`versions.${size}`] = {
  //     path: newPath,
  //     size: stat.size,
  //     type: originalImage._fileRef.type,
  //     extension: originalImage._fileRef.extension,
  //     name: originalImage._fileRef.name,
  //     meta: {
  //       width: newImgInfo.width,
  //       height: newImgInfo.height
  //     }
  //   };

  //   await Images.collection.update(imageRef._id, upd);

  //   return 'done';
	}
});