//
//  Tab.js
//  Kite - Nor Sanavongsay, 
//
//  Created on 4/7/17.
//

layer.canvasReady = function(event) { 
    
    //grab values from data, if not data then default values
    this.min = this.data.dataValueForKey("min") || 0;
    this.max = this.data.dataValueForKey("max") || 100;
    this.startValue = this.data.dataValueForKey("slidervalue") || 0;
    
    var startValuePercent = (this.startValue-this.min)/(this.max-this.min)
    
    //locate parts of component
    for(var l of this.sublayers){
        switch(l.name) {
            case "Tab":
                this.tab = l;
                break;
            case "gutter":
                this.gutter = l;
                this.colorBar = l.sublayers[0];
                break;
        }
    }
    
    //inital state based on passed start value in data field and min/max
    this.tab.x = this.gutter.width * startValuePercent;
    this.colorBar.width = this.gutter.width * startValuePercent;
    
    //get percentage with min/max
    this.slidervalue = this.getSliderValue();
    //canvas.getLayerByName("slider input").string = this.slidervalue.toString();
    
    //config
    this.colorBar.allowsImplicitAnimations = false;
    this.tab.allowsImplicitAnimations = false;        
};


// ------------------------------------------
// Handle Events
// ------------------------------------------

layer.mouseMoved = function(event) { 
    
    this.colorBar.width = this.tab.x;
    
    if(this.tab.x < 0){
        this.tab.x = 0;
        this.colorBar.width = 0;
        
    }
    if(this.tab.x > this.gutter.width){
        this.tab.x = this.gutter.width;
    }

    //get percentage with min/max
    this.slidervalue = this.getSliderValue();
   
};

layer.mouseDown = function(event) {
     
     var loc = event.locationInLayer(this);
     this.tab.x = loc.x;
     this.colorBar.width = loc.x;
     
     //get percentage with min/max
     //this.slidervalue = this.getSliderValue(loc.x);
     //canvas.getLayerByName("slider input").string = this.slidervalue.toString();
}

layer.getSliderValue  = function(value){
    var x = value || this.tab.x;
    return Math.round(((x/this.gutter.width) * (this.max-this.min)) + this.min);
}
