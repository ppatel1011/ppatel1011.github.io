// this is for your game/web toy
var stageLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
var dragon;
var dragonFlyingAnimation;
var stoneImage;
var stoneGroup;

var goal;
var goalImage;

var goalTextImage;

function preload() {
    dragonFlyingAnimation = loadAni('assets/dragonOpenWings.png', 'assets/DragonClosedWings.png');
    dragonFlyingAnimation.frameDelay = 15;

    // Load the block image
    stoneImage = loadImage('assets/stone.png');
  
   
}

function setup() {
	// Create the canvas
     new Canvas(700, 500);

    // Create the stage using the layout information
    stoneGroup = createGroup();
    for (var y = 0; y < stageLayout.length; y++) {
      for (var x = 0; x < stageLayout[y].length; x++) {
        if (stageLayout[y][x] == 1) {
          // Create the blocks
          var stone =  new Sprite(x * 50 + 25, y * 50 + 25);
          stone.addImage(stoneImage);
          stoneGroup.add(stone);
          stone.scale = 0.065;
          stone.collider = 'static';
        }
        else if (stageLayout[y][x] == 2) {
          goal = createSprite(x * 50, y * 50); 
        }
      }
    }
  
    // Create a ghost sprite
    dragon =  new Sprite(100, 100);
    dragon.addAni('flying', dragonFlyingAnimation);
    dragon.scale = 3;
   
}

function draw() {
	 // Color in the background
     background(135, 206, 235);

     // Control the ghost
     dragonControl();
   
     // Display all sprites
     drawSprites();
}

function dragonControl() {
// The ghost's movement
var distX = mouseX - dragon.position.x;
var distY = mouseY - dragon.position.y;
dragon.velocity.x = distX * 0.02;
dragon.velocity.y = distY * 0.02;

// Collision detection for the blocks
dragon.collide(stoneGroup);
}
