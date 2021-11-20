let asMod, asInst;

async function loadAs() {
    const importObject = {
        module: {},
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at in as" + line + ":" + column);
            }
        }
    };

    const module = await WebAssembly.instantiateStreaming(
        fetch("WASMs/as.wasm"),
        importObject
    );

    asMod = module;
    asInst = module.instance;
}

async function asMonteCarloPi(iterations) {
    asInst.exports.setSeed(new Date().getTime());
    return asInst.exports.monteCarloPi(iterations);
}
