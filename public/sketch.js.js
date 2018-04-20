var windowFactor;
var startPointX;
var whileCounter;
var startPointY;

var emojiArray = [];
var randomArrayInt;
var s;
var interId;

function preload() {
  missRect = loadImage("images/missingEmojiLow.png"); // load missing emoji image

  emoji1 = loadImage("images/emoji1.png");
  emoji2 = loadImage("images/emoji2.png");
  emoji3 = loadImage("images/emoji3.png");
  emoji4 = loadImage("images/emoji4.png");
  emoji5 = loadImage("images/emoji5.png");
  emoji6 = loadImage("images/emoji6.png");
  emoji7 = loadImage("images/emoji7.png");
  emoji8 = loadImage("images/emoji8.png");
  emoji9 = loadImage("images/emoji9.png");
  emoji10 = loadImage("images/emoji10.png");
  emoji11 = loadImage("images/emoji11.png");
  emoji12 = loadImage("images/emoji12.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  emojiArray = [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10, emoji11, emoji12]

  console.log(windowWidth, windowHeight);

  startPointX1 = 15;
  startPointX2 = 15;
  startPointX3 = 15;
  startPointX4 = 15;
  startPointX5 = 15;
  startPointX6 = 15;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomArrayInt = Math.floor(Math.random() * (max - min)) + min;
}

function draw() {

    // Row One

    emojiFlip = Math.random();
    if (emojiFlip > 0.5) {
      getRandomInt(0, 11);
      //console.log("random int: " + randomArrayInt);
      image(emojiArray[randomArrayInt], startPointX1, 65)
      startPointX1 = startPointX1 + 180;
    } else {
 		//console.log("emoji not created");
        image(missRect, startPointX1, 15);
        startPointX1 = startPointX1 + 180;
      }

    //Row Two

    emojiFlip2 = Math.random();
    if (emojiFlip2 > 0.5) {
      getRandomInt(0, 11);
      //console.log("random int: " + randomArrayInt);
      image(emojiArray[randomArrayInt], startPointX2, 380)
      startPointX2 = startPointX2 + 180;
    } else {
 		//console.log("emoji not created");
        image(missRect, startPointX2, 330);
        startPointX2 = startPointX2 + 180;
      }


   //Row Three

    emojiFlip3 = Math.random();
    if (emojiFlip3 > 0.5) {
      getRandomInt(0, 11);
      //console.log("random int: " + randomArrayInt);
      image(emojiArray[randomArrayInt], startPointX3, 695)
      startPointX3 = startPointX3 + 180;
    } else {
 		//console.log("emoji not created");
        image(missRect, startPointX3, 645);
        startPointX3 = startPointX3 + 180;
      }

    //Row Four
    emojiFlip4 = Math.random();
    if (emojiFlip4 > 0.5) {
      getRandomInt(0, 11);
      //console.log("random int: " + randomArrayInt);
      image(emojiArray[randomArrayInt], startPointX4, 1010)
      startPointX4 = startPointX4 + 180;
    } else {
 		//console.log("emoji not created");
        image(missRect, startPointX4, 960);
        startPointX4 = startPointX4 + 180;
      }

    if (startPointX1 > (windowWidth * 14)) {
      background(255);
      startPointX1 = 0;
      startPointX2 = 0;
      startPointX3 = 0;
      startPointX4 = 0;
    }
}
