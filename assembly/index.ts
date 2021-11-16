// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

let x : u64 = 15634;
function randomNumber() : f64 {
  // Linear congruential generator
  const a : u64 = 1013904223;
  const m : u64 = 1664525;
  const max : u64 = 2 ** 32;
  x = (m * x + a) % max;
  return (x as f64) / (max as f64);
}


export function monteCarloPi(iterations : u64) : f64 {
  let inside : u64 = 0;
  for (let i : u64 = 0; i < iterations; i++) {
    const x = randomNumber();
    const y = randomNumber();
    if (x * x + y * y <= 1) {
      inside++;
    }
  }
  return 4 * (inside as f64) / (iterations as f64);
}
