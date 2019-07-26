import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MicIcon from '@material-ui/icons/Mic';
import Grid from '@material-ui/core/Grid';
import { STATUS } from '../utils/constants';

class InitialControls extends Component {

    constructor(props) {
        super(props);
        this.onRecord = this.onRecord.bind(this);
    }

    onRecord() {
        this.props.stateChange(STATUS[1]);
    }

    render() {
        return (
            <Grid
            container
            justify="center"
            alignItems="stretch">
                <IconButton color="primary" onClick={this.onRecord}>
                    <MicIcon></MicIcon>
                </IconButton>
            </Grid>
        )
    }
}

export default InitialControls
