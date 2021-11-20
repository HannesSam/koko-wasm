
let x : i32 = 546545;
export function setSeed(seed : i32) : void {
    x = seed;
}

function randomNumber() : f32 {
  // Linear congruential generator
  const a = 1013904223;
  const m = 1664525;
  const max = 2 ** 32;
  x = (m * x + a) % max;
  return (x as f32) / (max as f32);
}

export function monteCarloPi(iterations : i32) : f32 {
  let inside = 0;
  for (let i = 0; i < iterations; i++) {
    const x = randomNumber();
    const y = randomNumber();
    if (x * x + y * y <= 1) {
      inside++;
    }
  }
  return 2.0;
  return (4.0 * (inside as f32)) / (iterations as f32);
}