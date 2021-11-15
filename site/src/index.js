//alert("hello");

function evenOrNot() {
  var t0 = performance.now();
  // console.log("Hejsan");
  // let evenNumers = [];
  // for (let index = 0; index < 900383445; index = index + 2) {
  //   evenNumers.push(index);
  // }

  // let even = false;
  // for (let index = 0; index < evenNumers.length; index++) {
  //   const element = evenNumers[index];
  //   if (element == numberToCheck) {
  //     even = true;
  //   }
  // }
  // console.log(even);

  // let i = 1n;

  // let x = 3n * 10n ** 100020n;
  // let pi = x;
  // while (x > 0) {
  //   x = (x * i) / ((i + 1n) * 4n);
  //   pi += x / (i + 2n);
  //   i += 2n;
  // }
  // console.log(pi / 10n ** 20n);
  for (let index = 0; index < 400; index++) {
    let result = 242 * 34;
    console.log(result);
  }
  var t1 = performance.now();
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
}

window.evenOrNot = evenOrNot;
