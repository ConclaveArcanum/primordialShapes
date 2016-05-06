//primordialShapes.js
//cc[0]
//M∴

var curres = 0;

var primordialShapes = function(target,centerX, centerY, radius, maxres){
    var c=document.getElementById(target);
    var cxt=c.getContext("2d");
    var polarize =  (2 * Math.PI);
    var aroundStep = curres/maxres;
    var aroundRadians = aroundStep * polarize;
    var theta = polarize;

    cxt.clearRect(0,0,300,300);
    cxt.beginPath();
    cxt.moveTo(centerX, centerY);

    while( theta < maxres) {
          var newX = centerX + theta * Math.cos(theta);
          var newY = centerY + theta * Math.sin(theta);
          var awayFromCenter = Math.pow(radius, theta/maxres);
          var aroundCenter = theta * aroundRadians;
          var newX = centerX + Math.cos(aroundCenter) * awayFromCenter;
          var newY = centerY + Math.sin(aroundCenter) * awayFromCenter;
          cxt.lineTo(newX, newY);
          cxt.strokeStyle = '#ff0000';
          cxt.lineWidth=0.5;
          theta++;
    }
    cxt.stroke();
    curres++;
};
