import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const App = (props) => {
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
        </Fragment>
    );
};

export default App;
