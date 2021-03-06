import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/RefreshRounded';
import Grid from '@material-ui/core/Grid';
import { STATUS } from '../utils/constants';

class PlaybackControls extends Component {

    onRecord() {
        this.props.stateChange(STATUS[0]);
    }

    render() {
        return (
            <Grid
            container
            justify="center"
            alignItems="stretch">
                <IconButton color="primary">
                    <RefreshIcon></RefreshIcon>
                </IconButton>
            </Grid>
        )
    }
}

export default PlaybackControls
