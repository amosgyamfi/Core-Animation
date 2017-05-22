//
//  1230.js
//  Kite
//
//  Created on 5/16/17.
//

layer.canvasReady = function(event) {
    var currentdate = new Date();
    var datetime = ((currentdate.getHours() < 10)?"0":"") + ((currentdate.getHours()>12)?(currentdate.getHours()-12):currentdate.getHours()) +":"  
                + currentdate.getMinutes();
    
    this.string = datetime;
};