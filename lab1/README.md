# Monte Carlo Pi estimation with WASM methods

## For GO:
1. Install Go (Mac: `brew install go` Other: https://golang.org/doc/install)
2. Install TinyGo: https://tinygo.org/getting-started/install/
3. Implement the Monte Carlo Pi method (check calculate_pi.js) in **main.go**
4. Run `tinygo build -o WASMs/go.wasm -target wasm ./calculate_pi.go`
5. Place `go.wasm` under the WASMs-folder
6. Run `go run server.go`


## For AssemblyScript:
1. Run `npm init` and just spam enter
2. Install packages: `npm install --save-dev assemblyscript http-server`
3. Add the following run scripts to the **package.json**
    "start": "http-server ."
    "asbuild": "asc calculate_pi.as -o WASMs/as.wasm --extension as"
