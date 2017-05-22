//
//  Brightness.js
//  Kite
//
//  Created on 5/16/17.
//
layer.canvasReady = function(event) {
    this.allowsImplicitAnimations = false;
};

layer.updateBrightness = function(){
    if(canvas.getLayerByName("Slider")){    
        this.opacity = canvas.getLayerByName("Slider").slidervalue/100;
    }

}