const canvas=document.getElementById('myCanvas'); //reference to our canvas 

canvas.width=200;

const ctx=canvas.getContext('2d');//2d context for drawing 2D shapes
const car=new Car(100,100,30, 50); //everything in pixel, we got x,y, width, height
car.draw(ctx); //draw the car on the canvas

animate();
function animate() {
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); //calls animate function again and again, giving us the illusion of movement 
}
