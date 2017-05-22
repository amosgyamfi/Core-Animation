//
//  UISun.js
//  Kite
//
//  Created on 3/16/17.
//

layer.canvasReady = function(event) {
    this.returnSun = function() {
        if(this.y >= 250 || this.y <= -100){
            canvas.getLayerByName("Screen").interactions[8].fire();
        }
        this.y = 49;
    };
}

layer.mouseDragged = function(event) { 
    this.returnSun();
};

layer.mouseUp = function(event) {
    this.returnSun();
};

layer.mouseExited = function(event) {
    this.returnSun();
};