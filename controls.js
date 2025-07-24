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
            }  
        }
    
        


    //same as function(event) on key down call this function but if i write it like  this then it wont refer to this of the object above
// here the 'this' refers to jo bhi element tha jis ne trigger kya the ye event and not the object we discussed above
       document.onkeyup=(event)=>{
        // inside here, `this` refers to the object that defined the arrow function
        //this is lexically bound so same as the 'this' where it was defined

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
            //console.table(this); //to see the changes in the console
        }
    }
}
