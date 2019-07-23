import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { STATUS } from '../utils/constants';

class RecordingControls extends Component {

    constructor(props) {
        super(props);
        this.stopRecord = this.stopRecord.bind(this);
    }

    stopRecord() {
        this.props.stateChange(STATUS[2]);
    }

    render() {
        return (
            <Grid
            container
            justify="center"
            alignItems="stretch"
            spacing={1}>
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" fullWidth={true}>
                        Pause
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" fullWidth={true} onClick={this.stopRecord} >
                        Stop
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default RecordingControls
