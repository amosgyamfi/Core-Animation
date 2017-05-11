//
//  Tab.js
//  Kite
//
//  Created on 4/7/17.
//

// ------------------------------------------
// Info
// ------------------------------------------
/*

 Use the 'layer' variable to
 reference the layer outside of a
 function.
 
 Use the 'this' keyword to reference
 the layer inside of a function.
 
 For example:
 
 layer.mouseUp = function(event) {
    this.position.x = 42;
 };

 */


// ------------------------------------------
// Called just before the presentation starts
// ------------------------------------------

layer.canvasReady = function(event) { 

    for(var l of this.sublayers){
        switch(l.name) {
            case "slider input":
                this.inputText = l;
                break;
            case "Tab":
                this.tab = l;
                break;
            case "gutter":
                this.gutter = l;
                this.colorBar = l.sublayers[0];
                break;
        }
    }
    
    this.colorBar.allowsImplicitAnimations = false;
    
    this.inputText.string = Math.round((this.tab.x/this.gutter.bounds.width)*100) + "%";
};


// ------------------------------------------
// Handle Events
// ------------------------------------------

layer.mouseDown = function(event) { 
    console.log();

};

// layer.mouseUp = function(event) { };

layer.mouseMoved = function(event) { 
    
    this.colorBar.width = this.tab.x;
    
    if(this.tab.x < 0){
        this.tab.x = 0;
        this.colorBar.width = 0;
        
    }
    if(this.tab.x > this.gutter.width){
        this.tab.x = this.gutter.width;
    }
    this.inputText.string = Math.round((this.tab.x/this.gutter.width)*100) + "%";
};

// layer.mouseEntered = function(event) { };

// layer.mouseExited = function(event) { };

// layer.mouseDragged = function(event) { };

// layer.scrollWheel = function(event) { };

// layer.keyDown = function(event) { };

// layer.keyUp = function(event) { };

// layer.magnifyGesture = function(event) { };

// layer.rotateGesture = function(event) { };


// ------------------------------------------
// Called to draw custom layer content
// ------------------------------------------
/*

layer.drawLayerInContext = function(layer, context) {

    var path = BezierPath.bezierPathWithRoundedRectXRadiusYRadius(this.bounds, 10, 10);

    Color.redColor().set();
    path.fill();
};

 */
