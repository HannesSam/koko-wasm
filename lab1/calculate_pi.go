package main

import (
	"time"
)

func getTime() uint64 {
	// Wow, this works!
	return uint64(time.Now().UnixNano())
}

var x uint64 = getTime()

//export randomNumber
func randomNumber() float64 {
	const a = uint64(1013904223)
	const m = uint64(1664525)
	const max = uint64(1 << 32)
	x = (m*x + a) % max
	return float64(x) / float64(max)
}

// TODO: Implement function monteCarloPi
