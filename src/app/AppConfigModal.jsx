import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import useAppConfig from "./useAppConfig";

const AppConfigModal = () => {
    const { rtlUrl, rtlPort, setRtlConnection } = useAppConfig();
    const [url, setUrl] = useState(rtlUrl);
    const [port, setPort] = useState(rtlPort);

    const open = rtlUrl == null || rtlPort == null;
    const handleSubmit = () => setRtlConnection(url, port);

    return (
        <Modal open={open}>
            <Paper style={{ width: "400px", padding: "1em", margin: "5em auto 0 auto" }}>
                <div>
                    <TextField
                        id="url"
                        label="RTL url"
                        placeholder="localhost"
                        onChange={({ target: { value } }) => setUrl(value)}
                    />
                </div>
                <div>
                    <TextField
                        id="port"
                        label="RTL port"
                        placeholder="1234"
                        onChange={({ target: { value } }) => setPort(value)}
                    />
                </div>
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </Paper>
        </Modal>
    );
};

export default AppConfigModal;
