window.onload = function() {

	Video.init();

}



var Video = {
	init: function() {
		var links = document.querySelectorAll('.portfolio-item a');


		links.forEach(function(link) {
			Video.listen(link);
		});
	},

	listen: function(link) {
		var video = link.querySelector('video');

		link.addEventListener('mouseover', function() {
			console.log('mouseover');
			Video.play(video);
		});

		link.addEventListener('mouseleave', function() {
			setTimeout(function() {
				 Video.stop(video)
			}, 300);

		});

	},

	play: function(video) {
		video.play();
	},

	stop: function(video) {
		video.pause();
		video.currentTime = 0;
	}

};


// var canvidControl = canvid({
//     selector : '.video',
//     videos: {
//         clip1: { src: 'video/idear.png', frames: 74, cols: 10, fps: 10, loops: 1, onEnd: function(){
//           console.log('clip1 ended.');
//           // canvidControl.play('clip2');
//         }}
//         // clip2: { src: 'clip2.jpg', frames: 43, cols: 6, fps: 24 }
//     },
//     width: 320,
//     height: 250,
//     loaded: function() {
//         canvidControl.play('clip1');
//         // reverse playback
//         // canvidControl.play('clip1', true);
//     }
// });



// var images = 75;
// var images = document.getElementById('images');

// var img = document.createElement('img');
// img.src = './video/idearideas/IMG_0001.jpg';
// for (var i = 0; i < 75; i++) {
//     var img = document.createElement('img');
//     img.src = './video/idearideas/IMG_00' + i + '.jpg';

//     images.appendChild(img);

// }
