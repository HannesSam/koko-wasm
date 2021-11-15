export function labOneTest(jsOrWasm) {
  var t0 = performance.now();
  if (jsOrWasm == 0) {
    labOneJS();
  } else {
    labOneWASM();
  }
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
}

function labOneWASM() {
  import("../pkg/index.js").then((module) => {
    module.labOneWASM();
  });
}

function labOneJS() {
  for (let index = 0; index < 400; index++) {
    let result = 242 * 34;
    console.log(result);
  }
}