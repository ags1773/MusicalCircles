var keyData = {
	q: {
		sound: new Howl({
			src: ['A/bubbles.mp3']
			}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
			src: ['A/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
			src: ['A/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
			src: ['A/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
			src: ['A/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
			src: ['A/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
			src: ['A/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
			src: ['A/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['A/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
			src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
			src: ['A/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
			src: ['A/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
			src: ['A/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
			src: ['A/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
			src: ['A/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
			src: ['A/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
			src: ['A/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
			src: ['A/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
			src: ['A/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
			src: ['A/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
			src: ['A/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
			src: ['A/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
			src: ['A/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
			src: ['A/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['A/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
			src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	}
};

$(document).keypress(function(event){
	event.preventDefault();
	keyData[event.key].sound.play();
	$('body').css('background-color', keyData[event.key].color);
	console.log(event.key + " Key pressed");
});
