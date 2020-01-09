import Bird from '/index/Bird.js';
export default class InputHandler {

    constructor(bird){
        
        document.addEventListener('keydown', (event) => {
            if(event.keyCode == 32) {//if space bar was pressed
                //alert('sauce');//alert, we need to change the code here so the Bird will jump.
                
                bird.jump();
            }
        });

    }
}