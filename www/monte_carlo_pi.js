let x = new Date().getTime();
function randomNumber() {
  // Linear congruential generator
  const a = 1013904223;
  const m = 1664525;
  const max = 2 ** 32;
  x = (m * x + a) % max;
  return x / max;
}

function monteCarloPi(iterations) {
  let inside = 0;
  for (let i = 0; i < iterations; i++) {
    const x = randomNumber();
    const y = randomNumber();
    if (x * x + y * y <= 1) {
      inside++;
    }
  }
  return (4 * inside) / iterations;
}
