import { Fragment, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppConfigModal from "./AppConfigModal";
import SignalGraph from "./SignalGraph";

const App = () => {
    const messageHistory = useRef([]);

    const root = document.getElementById("root");
    // useEffect(() => {
    //     document.getElementById("root").addEventListener("rtl_data", ({ detail: data }) => {
    //         messageHistory.current = messageHistory.current.concat(data);
    //     });
    // }, []);
    const sendEvent = (type) => root.dispatchEvent(new Event(type));

    return (
        <Fragment>
            <CssBaseline />
            <AppConfigModal />
            <Grid container>
                <Grid item xs={3}>
                    Here the smeter
                </Grid>
                <Grid item xs={6}>
                    Here frequency/vfos stuff like that
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={() => sendEvent("rtl_play")}>Play</Button>
                    <Button onClick={() => sendEvent("rtl_stop")}>Stop</Button>
                </Grid>
            </Grid>
            <div>Here the frequency</div>
            <div style={{ height: "15em" }}>
                <SignalGraph />
                Here the waterfall
            </div>
            <ul>
                {messageHistory.current.map((message, idx) => (
                    <span key={idx}>{message ? message.data : null}</span>
                ))}
            </ul>
        </Fragment>
    );
};

export default App;
