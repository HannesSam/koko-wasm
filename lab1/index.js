async function plotExecutionTimes(what) {
  clearData(what);

  data = [];
  timeoutObj = { timeoutID: undefined };
  function loop(i) {
    if (i < 200) {
      timeoutObj.timeoutID = setTimeout(async () => {
        const iterations = Math.round(1 + i ** 3);
        const time = await measureCalculationTime(what, iterations);
        data.push({ x: iterations, y: time, id: iterations });
        updateData(what, data);
        //if (plopLoaded) plop.play();
        loop(i + 1);
      }, 100);
    } else {
      timeoutObj.timeoutID = undefined;
    }
  }

  loop(0);

  return timeoutObj;
}

async function measureCalculationTime(what, iterations) {
  f = getComputingFunction(what);
  console.log("Measure " + what + " with " + iterations + " iterations...");

  startTime = new Date();
  const pi_estimate = await f(iterations);
  endTime = new Date();

  const duration = endTime - startTime;
  console.log("Took " + duration + " ms (pi ≈ " + pi_estimate + ")");
  return duration;
}

function getComputingFunction(what) {
  switch (what.toLowerCase()) {
    case "javascript":
      return jsMonteCarloPi;
    case "go":
      return goMonteCarloPi;
    case "as":
      return asMonteCarloPi;
    default:
      throw new Error("Unknown computing function");
  }
}

// Create axes with ticks
function getAxes() {
  let x = d3.scalePow().exponent(0.75).domain([0, 2500000]).range([10, 450]);
  let y = d3.scaleLinear().domain([0, 100]).range([450, 20]);

  let xAxis = d3
    .axisBottom(x)
    .ticks(10)
    .tickFormat((d) => {
      if (d / 1000000 >= 1.0) {
        return d / 1000000 + "M";
      } else if (d / 1000 >= 1.0) {
        d = d / 1000 + "K";
      }
      return d;
    });
  let yAxis = d3.axisLeft(y).ticks(10);
  return [x, y, xAxis, yAxis];
}

function createPlot() {
  let svg = d3.select("svg");
  let [x, y, xAxis, yAxis] = getAxes();

  svg
    .append("g")
    .attr("transform", "translate(0, 450)")
    .call(xAxis)
    .style("stroke", "white")
    .style("fill", "white")
    .append("text")
    .attr("transform", "translate(480, 6.5)")
    .text("iterations");

  svg
    .append("g")
    .attr("transform", "translate(10 , 0)")
    .call(yAxis)
    .style("stroke", "white")
    .style("fill", "white")
    .append("text")
    .attr("transform", "rotate(270) translate(0, 0)")
    .text("ms");

  svg.append("path");
  svg.append("g").classed("_javascript", true)
  svg.append("g").classed("_go", true)
  //svg.selectAll("dot").data();
}

const colors = {
  javascript: "#f7df1e",
  go: "#00acd7",
  as: "#c03285"
}

function updateData(what, data) {
  let svg = d3.select("svg");
  let [x, y, xAxis, yAxis] = getAxes();

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
  let circle = svg
    .selectAll("g._" + what)
    .selectAll("circle" + what).data(data, d => d);

  const newCircles = circle
    .enter()
    .append("circle")
    .style("fill", colors[what])
    .attr("r", 0)
    .attr("cx", function (d, i) {
      return x(d.x);
    })
    .attr("cy", function (d, i) {
      return y(d.y);
    })

    .transition()
    .duration((d) => (Math.random() * 100 + 150))
    .attr("r", 1.5);
}

function clearData(what) {
  let svg = d3.select("svg");

  svg
    .selectAll("g._" + what)
    .selectAll("circle")
    .transition()
    .duration(250)
    .attr("r", 0)
    .remove();
}
