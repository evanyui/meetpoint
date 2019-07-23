import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class PostRecordControls extends Component {
    render() {
        return (
            <Grid
            container
            justify="space-between"
            alignItems="stretch">
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" fullWidth={true}>
                        Play
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" fullWidth={true}>
                        Save Audio
                    </Button>
                </Grid>
            </Grid>
        )
    }
}

export default PostRecordControls
