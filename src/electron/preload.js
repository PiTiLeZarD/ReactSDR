var net = require("net");

const bytefactor = 255 / 2 - 1;
const bytes2data = (bytes) => {
    let data = [];
    let i = null,
        q = null;
    for (let it = 0; it < bytes.length; it++) {
        if (i == null) i = bytes[it] / bytefactor;
        else if (q == null) q = bytes[it] / bytefactor;
        else {
            data.push([i, q]);
            i = null;
            q = null;
        }
    }
    return data;
};

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    const client = new net.Socket();
    client.connect(9000, "127.0.0.1", () => {
        console.log("Connected");
    });

    client.on("data", (bytes) => {
        root.dispatchEvent(new CustomEvent("rtl_data", { detail: bytes2data(bytes) }));
    });

    client.on("close", () => {
        console.log("Connection closed");
    });
});
