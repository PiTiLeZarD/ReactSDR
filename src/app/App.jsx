import { Fragment, useRef, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

const App = (props) => {
    const messageHistory = useRef([]);

    useEffect(() => {
        document.getElementById("root").addEventListener("rtl_data", ({ detail: data }) => {
            messageHistory.current = messageHistory.current.concat(data);
        });
    }, []);

    return (
        <Fragment>
            <Grid container>
                <Grid item xs={3}>
                    Here the smeter
                </Grid>
                <Grid item xs={6}>
                    Here frequency/vfos stuff like that
                </Grid>
                <Grid item xs={3}>
                    Here buttons
                </Grid>
            </Grid>
            <div>Here the frequency</div>
            <div>Here the waterfall</div>
            <ul>
                {messageHistory.current.map((message, idx) => (
                    <span key={idx}>{message ? message.data : null}</span>
                ))}
            </ul>
        </Fragment>
    );
};

export default App;
