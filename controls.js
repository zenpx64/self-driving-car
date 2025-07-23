class Controls{
    constructor(){
        // booleans to check if them keys are pressed
        this.forward = false; 
        this.left = false;
        this.right = false; 
        this.reverse = false;
        

        //to check when we press or release a key
        this.#addKeyboardListeners();
    }
   
    //hahstag because its  aprivate method. It is its own repsonsibility so no access from outside 
    #addKeyboardListeners(){
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }     console.table(this);
        //now for key release
        }
    
        //debugging stuff 

   
    
    
       document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
            console.table(this); //to see the changes in the console
        }
    }
}
