/*
 * --  canvas is something block of the pixels and we need to draw on that it
 *   it is similar to the microsoft paint
 * -- but we draw things on the context
 * -- and the context can be either 2D or 3-D
 *
 */
// getting the canvas element
const canvas = document.getElementById("draw");

// getting the context on which we will be drawing
const ctx = canvas.getContext("2d");

// by default canvas height and width is 800px as we hav defiend in the html

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// start color of the paint #BADA55
ctx.strokeStyle = "#BADA55";

//to make the end of the line and while joining of the line rounded shape from the square shape
// ctx.lineJoin = "round";
// to make the line smooth on turning edges instead of having dashed lines shape
ctx.lineCap = "round";

//changing the line width
ctx.lineWidth = 20;

// creating a flag for getting drawing status
let isDrawing = false;

// get the end cordinates of the line
let lastX = 0;
let lastY = 0;

let hue = 0;

function draw(e) {
  if (isDrawing === false) {
    return;
  }
  console.log(e);
  //  changing the color of the stroke
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  hue++;
  if(hue>360){
      hue=0;
  }

  // all the three steps below will start the line
  ctx.beginPath();
  // start from cordinates below
  ctx.moveTo(lastX, lastY);
  // Move to cordinates
  ctx.lineTo(e.offsetX, e.offsetY);

  // add the color to the line to make it visible
  ctx.stroke();

  // upadating the cordinates
  lastX = e.offsetX;
  lastY = e.offsetY;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // upadating the cordinates
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
// if the mouse leaves the actual window
canvas.addEventListener("mouseout", () => (isDrawing = false));
