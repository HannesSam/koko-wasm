// Peform tests
function measureTime(what, iterations) {
  f = getComputingFunction(what);
  startTime = new Date();
  f(iterations);
  endTime = new Date();
  return endTime - startTime;
}

function getComputingFunction(what) {
  switch (what) {
    case "JavaScript":
      return (iterations) => {};
    default:
      throw new Error("Unknown computing function");
  }
}

// Create axes with ticks
let x = d3.scalePow().exponent(2).domain([0, 100]).range([0, 500]);
let y = d3.scaleLinear().domain([0, 100]).range([500, 0]);

let xAxis = d3.axisBottom(x).ticks(10);
let yAxis = d3.axisLeft(y).ticks(10);

function createPlot() {
  let svg = d3.select("svg");

  svg
    .append("g")
    .attr("transform", "translate(0, 450)")
    .call(xAxis)
    .style("stroke", "white")
    .style("fill", "white");

  svg
    .append("g")
    .attr("transform", "translate(-5 , 0)")
    .call(yAxis)
    .style("stroke", "white")
    .style("fill", "white");

  svg.append("path");
  //svg.selectAll("dot").data();
}

function updateData(data) {
  let svg = d3.select("svg");

  // Create a line
  let line = d3
    .line()
    .x(function (d) {
      return x(d.x);
    })
    .y(function (d) {
      return y(d.y);
    });

  // Append a circle at each point
  let circle = svg.selectAll("circle").data(data);

  const newCircles = circle
    .enter()
    .append("circle")
    .style("fill", "white")
    .attr("r", 0)
    .attr("cx", function (d) {
      return x(d.x);
    })
    .attr("cy", function (d) {
      return y(d.y);
    })

    .transition()
    .duration(250)
    .attr("r", 2);

  newCircles.merge(circle);
}
