import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Recorder from '../components/Recorder';
import Box from '@material-ui/core/Box';

class Top extends Component {
    render() {
        return (
            <Grid container
            justify="center"
            alignItems="center">
                <Grid item xs={10}>
                    <Recorder/>
                </Grid>
            </Grid>
        );
    }
}

export default Top;