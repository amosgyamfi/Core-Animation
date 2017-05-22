//
//  Screen.js
//  Kite
//
//  Created on 5/15/17.
//

layer.canvasReady = function(event) {
    this.isLightOn = true;
};

layer.turnLightOn = function(){
    this.isLightOn = true;
}

layer.turnLightOff = function(){
    this.isLightOn = false;
}