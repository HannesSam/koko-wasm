# Monte Carlo Pi estimation with WASM methods

## For GO:

1. Install Go (Mac: `brew install go` Other: https://golang.org/doc/install)
2. Install TinyGo: https://tinygo.org/getting-started/install/
3. Implement the Monte Carlo Pi method (check www/js_calls.js)
4. Run `tinygo build -o go.wasm -target wasm ./main.go`
5. Place `go.wasm` under the WASMs-folder
6. Run `go run server.go`
