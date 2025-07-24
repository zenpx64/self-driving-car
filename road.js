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

const topLeft={x:this.left, y:this.top};
const bottomLeft={x:this.left, y:this.bottom};
const topRight={x:this.right, y:this.top};
const bottomRight={x:this.right, y:this.bottom};

         //borders in array 
         this.borders=[ 
            [topLeft, bottomLeft],
            [topRight, bottomRight]
            ];

    }
    getLaneCenter(laneIndex){
        const laneWidth=this.width/this.laneCount;
        return this.left+laneWidth/2+Math.min(laneIndex, this.laneCount-1)*laneWidth; //to get the center of the lane als
        //min for rightmost if laneIndex is greater than laneCount
    }

draw(ctx){
    ctx.lineWidth=5;
    ctx.strokeStyle="white";


    for(let i=1; i<=this.laneCount-1; i++){
        //to avoid beign x same, we are gonna use linear interpolation
const x=lerp(this.left, this.right, i/this.laneCount); //so from left to right, 3 sections

/*
if(i>0 && i<this.laneCount){ //explain: we don't want to draw the lines at the very left and right edges
   ctx.setLineDash([20,20]); //to make the lines dashed
 }else{
    ctx.setLineDash([]); //to make the lines solid
 } 
 */

  ctx.setLineDash([20,20]); 
  ctx.beginPath();
    ctx.moveTo(x, this.top);
    ctx.lineTo(x, this.bottom);
     ctx.stroke();
       }
//so now we seprated the lanes and now we want to draw the borders

       ctx.setLineDash([]); 
       this.borders.forEach(border=>{
           ctx.beginPath();
           ctx.moveTo(border[0].x, border[0].y);
           ctx.lineTo(border[1].x, border[1].y);
           ctx.stroke();
       });
    }
}

