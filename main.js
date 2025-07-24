const canvas=document.getElementById('myCanvas'); //reference to our canvas 

canvas.width=200;

const ctx=canvas.getContext('2d');//2d context for drawing 2D shapes
const road=new Road(canvas.width/2, canvas.width*0.9);
const car=new Car(road.getLaneCenter(2),100,30, 50); //everything in pixel, we got x,y, width, height
car.draw(ctx); //draw them car on the canvas lesgo 

animate();
function animate() {
    car.update();
    canvas.height=window.innerHeight;
    ctx.save(); //to save the current state
ctx.translate(0, -car.y+canvas.height*0.7);
    road.draw(ctx);
     car.draw(ctx);
   ctx.restore();
    requestAnimationFrame(animate); //calls animate function again and again, giving us the illusion of movement 
}
