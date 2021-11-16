package main

import "time"

// This calls a JS function from Go.
func main() {
	println("Pi ", monteCarloPi(500000000))
}

// This function is exported to JavaScript, so can be called using
// exports.multiply() in JavaScript.
//export multiply
func multiply(x, y int) int {
	return x * y
}

func getTime() uint64 {
	return uint64(time.Now().UnixNano())
}

var x uint64 = getTime()

func randomNumber() float64 {
	const a = uint64(1013904223)
	const m = uint64(1664525)
	const max = uint64(1 << 32)
	x = (m*x + a) % max
	return float64(x) / float64(max)
}

func monteCarloPi(iterations uint64) float64 {
	var inside uint64
	for i := uint64(0); i < iterations; i++ {
		x := randomNumber()
		y := randomNumber()
		if x*x+y*y < 1.0 {
			inside++
		}
	}
	return 4 * float64(inside) / float64(iterations)
}
