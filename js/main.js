//execute script when window is loaded
window.onload = function(){
  var w = 900, h = 500;

    var container = d3.select("body") //get the <body> element from the DOM
     .append("svg") //put a new svg in the body
     .attr("width", w) //assign the width
     .attr("height", h) //assign the height
     .attr("class", "container") //always assign a class (as the block name) for styling and future selection
     .style("background-color", "rgba(0,0,0,0.2)") //svg background color
     .append("rect") //add a <rect> element
    var innerRect = container.append("rect")
     .datum(400)
     .attr("width", function(d){ //rectangle width
            return d * 2; //400 * 2 = 800
        })
        .attr("height", function(d){ //rectangle height
            return d; //400
        })

        .attr("class", "innerRect") //class name
        .attr("x", 50) //position from left on the x (horizontal) axis
        .attr("y", 50) //position from top on the y (vertical) axis
        .style("fill", "#FFFFFF"); //fill color
    console.log(innerRect);

    // <rect> is now the operand of the container block
}

      var numbersArray = [1, 2, 3];

      var stringsArray = ["one", "two", "three"];

      var colorsArray = ["#F00", "#0F0", "#00F"];

      var objectsArray = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        }
      ];

      var arraysArray = [
        ['Madison', 23209],
        ['Milwaukee', 593833],
        ['Green Bay', 104057]
      ];
