class Road{
    constructor(x,width, laneCount=3){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-(width/2);
        this.right=x+(width/2);
 
       const infinity=1000000;  //there is infinty in javascript but apparently when drawing thing it works weirdly
       this.top=-infinity;
         this.bottom=infinity;

    }

draw(ctx){
    ctx.lineWidth=5;
    ctx.strokeStyle="white";


    for(let i=0; i<=this.laneCount; i++){
        //to avoid beign x same, we are gonna use linear interpolation
const x=lerp(this.left, this.right, i/this.laneCount); //so from left to right, 3 sections
        
    ctx.beginPath();
    ctx.moveTo(x, this.top);
    ctx.lineTo(x, this.bottom);
     ctx.stroke();

   
}

    }
}

//so like i want to go t percent on distance between a to b, lerp gives me the what that converted to distance is from a 

function lerp(A,B,t){
    return A+(B-A)*t;

}