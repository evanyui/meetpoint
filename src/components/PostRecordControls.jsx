import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrowRounded';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';

class PostRecordControls extends Component {
    render() {
        return (
            <Grid
            container
            justify="space-between"
            alignItems="stretch">
                <IconButton color="primary">
                    <PlayArrowIcon></PlayArrowIcon>
                </IconButton>
                <IconButton color="primary">
                    <SaveIcon></SaveIcon>
                </IconButton>
            </Grid>
        )
    }
}

export default PostRecordControls
