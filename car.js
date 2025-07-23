class Car{
    constructor(x, y, width, height) {
        this.x = x; // x position of the car
        this.y = y; // y position of the car
        this.width = width; // width of the car
        this.height = height; // height of the car

        this.speed=0;
        this.acceleration=0.2;
this.maxSpeed=3;
this.friction=0.05; //to slow down the car when no key is pressed

this.angle=0;
        this.controls= new Controls();
    }

    update(){
        if(this.controls.forward) {
            this.speed += this.acceleration; 
        }
    
    if(this.controls.reverse) {
        this.speed -= this.acceleration;
    }

    if(this.speed>this.maxSpeed) {
        this.speed= this.maxSpeed;
    }
    if(this.speed< -this.maxSpeed/2) {
        this.speed = -this.maxSpeed/2;
    }

    if(this.speed>0){
        this.speed-=this.friction;

    }

    if(Math.abs(this.speed)<this.friction){
        this.speed=0; 
    }

    if(this.controls.left){
        this.angle+=0.03; //turn left
    }

  //  a 90 degree rotated circle is gpnna be our coordinate system
    if(this.controls.right){
        this.angle-=0.03; //turn right
    }

    //if you just leave it to left and right, it breaks the law of physics because exceeds max speed 
    if(this.speed<0){
        this.speed+=this.friction;
    }
    

    this.y-= this.speed; //to give the weee effect like yknow how when brakes are lifted, the car doesnt just halt
}
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y); //to move the car to the x and y position
        ctx.rotate(-this.angle); //to rotate 
        ctx.beginPath(); 
          
        ctx.rect(
            this.x- this.width/2, 
            this.y-this.height/2, this.width, this.height); //so the x of car is gonna be  inside the car in
   ctx.fill();

    }
}