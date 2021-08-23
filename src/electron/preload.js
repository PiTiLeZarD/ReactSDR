var net = require("net");

let url = localStorage.getItem("rtlUrl");
let port = localStorage.getItem("rtlPort");
let connection = null;
let lastData = [];
let dispatchInterval = null;

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

const dispatch = (event, data) =>
    document.getElementById("root").dispatchEvent(new CustomEvent(event, { detail: data }));

const handlers = {
    rtl_config: [
        ({ detail: config }) => {
            url = config.url;
            port = config.port;
        },
    ],
    rtl_play: [
        () => {
            connection = new net.Socket();
            connection.connect(port, url, () => {
                console.log("Connected");
                dispatchInterval = setInterval(
                    () => dispatch("rtl_data", [...lastData.filter((_, i) => i % 2 == 0)]),
                    1000
                );
            });
            connection.on("data", (bytes) => {
                lastData = bytes;
            });

            connection.on("close", () => {
                console.log("Connection closed");
                clearInterval(dispatchInterval);
                dispatchInterval = null;
            });
        },
    ],
    rtl_stop: [
        () => {
            connection.destroy();
            connection = null;
        },
    ],
};

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    Object.keys(handlers).forEach((key) => handlers[key].forEach((handler) => root.addEventListener(key, handler)));
});
