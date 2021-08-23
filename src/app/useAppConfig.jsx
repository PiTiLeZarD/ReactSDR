import create from "zustand";

const useAppConfig = create((set) => ({
    rtlUrl: localStorage.getItem("rtlUrl"),
    rtlPort: localStorage.getItem("rtlPort"),
    setRtlConnection: (url, port) => {
        document.getElementById("root").dispatchEvent(new CustomEvent("rtl_config", { detail: { url, port } }));
        localStorage.setItem("rtlUrl", url);
        localStorage.setItem("rtlPort", port);
        set(() => ({ rtlUrl: url, rtlPort: port }));
    },
}));

export default useAppConfig;
