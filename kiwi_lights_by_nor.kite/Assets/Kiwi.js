//
//  Kiwi.js
//  Kite
//
//  Created on 3/16/17.
//  Copyright @2017 Nor Sanavongsay
//
layer.canvasReady = function(event) {
    this.currentChar = 2;
    this.characters = ["kiwi","taro","tang","cheri","jackfroot","blueberri"];
    this.returnChar = function() {
        if(this.x >= 100){
            this.currentChar++;
            if (this.currentChar >= (this.characters.length + 2)) {
                this.currentChar = 2; // loop the characters
            }
            canvas.getLayerByName("Screen").interactions[this.currentChar].fire();
        } else if (this.x <= -10) {
            this.currentChar--;
            if (this.currentChar <= 2){
                this.currentChar = this.characters.length + 1;
            }
            canvas.getLayerByName("Screen").interactions[this.currentChar].fire();
        }
        this.x = 24;
        console.log(this.currentChar);
        console.log(this.characters.length);
    };
}

layer.mouseDragged = function(event) { 
    this.returnChar();
};

layer.mouseUp = function(event) {
    this.returnChar();
};

layer.mouseExited = function(event) {
    this.returnChar();
};