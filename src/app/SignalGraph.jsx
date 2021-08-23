import { useState } from "react";
import { MiniGraph, MiniGraphLines } from "react-minigraph";

const SignalGraph = (props) => {
    const root = document.getElementById("root");

    const [data, setData] = useState([]);

    root.addEventListener("rtl_data", ({ detail: data }) => {
        setData(data);
    });

    return (
        <MiniGraph data={data}>
            <MiniGraphLines />
        </MiniGraph>
    );
};

export default SignalGraph;
