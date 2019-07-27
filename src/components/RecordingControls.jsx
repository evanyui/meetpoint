import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import StopIcon from '@material-ui/icons/StopRounded';
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
            alignItems="stretch">
                <IconButton color="primary" onClick={this.stopRecord}>
                    <StopIcon></StopIcon>
                </IconButton>
            </Grid>
        )
    }
}

export default RecordingControls
