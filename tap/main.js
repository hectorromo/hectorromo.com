var x = 180;
var y = 180;
var XSPEED = 3;
var YSPEED = 3;
var CIRCLE_SIZE = 100;
var taps = 0;	

var r, g, b;
var sound;


function setup() {
    createCanvas(windowWidth, windowHeight);
	background(25);
	
	r = random(255);
	g = random(255);
	b = random(255);

	textSize(60);
	textAlign(LEFT);

	sound = new Howl({
		src: ['./fart.mp3'],
		sprite: {
		  fart: [0, 1500]
		}
	});
}

function draw() {

    background(25);
	//distance from center of the screen
	// var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

	// fill( random(200, 250), random(200, 250), random(200, 250));
	// console.lsog('DIAMETER: ' + CIRCLE_SIZE);
    fill(r, g, b);
	ellipse (x, y, CIRCLE_SIZE, CIRCLE_SIZE);

  	//bouncing horizontally
	x = x + XSPEED;
	if (x > windowWidth || x < 0)  {
     	XSPEED = -XSPEED;
  	}

  	//bouncing vertically
  	y = y + YSPEED;
  	if (y > windowHeight || y < 0) {
		YSPEED = -YSPEED;
	}

	fill(255);
  	text(taps, 25, 65);
}


// When the user clicks the mouse
function mousePressed() {
  	// Check if mouse is inside the circle
	var distance = dist(mouseX, mouseY, x, y);
	  
	// TAPPED!
  	if (distance < CIRCLE_SIZE) {
    	// Pick new random color values
    	r = random(255);
    	g = random(255);
		b = random(255);

		if(random(0, 1) < 0.6) {
			YSPEED = -YSPEED;
		}

		if(random(0, 1) < 0.6) {
			XSPEED = -XSPEED;
		}


		XSPEED *= 1.1;
		YSPEED *= 1.1;
		// XSPEED += 4;
		// YSPEED += 4;
		CIRCLE_SIZE -= 3;
		taps++;
		sound.play('fart');
  	}
}


