let goMod, goInst;
const go = new Go();

function loadGo() {
  if (!WebAssembly.instantiateStreaming) {
    // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
      const source = await (await resp).arrayBuffer();
      return await WebAssembly.instantiate(source, importObject);
    };
  }

  WebAssembly.instantiateStreaming(fetch("WASMs/go.wasm"), go.importObject)
    .then((result) => {
      goMod = result.module;
      goInst = result.instance;
      go.run(goInst);
    })
    .catch((err) => {
      console.error(err);
    });

  //inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
}

async function goMonteCarloPi(iterations) {
  return goInst.exports.monteCarloPi(iterations);
}
