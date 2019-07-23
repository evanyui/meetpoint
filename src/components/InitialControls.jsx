import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" fullWidth={true} onClick={this.onRecord}>
                        Record
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default InitialControls
