import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class Recorder extends Component {
    render() {
        return (
            <Paper>
                <Box p={2}>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={1}>
                            <Box mb={1}>
                                <Grid container justify="center">
                                    ||||||||||||||||||||||||
                                </Grid>
                            </Box>
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
                    </Grid>
                </Box>
            </Paper>
        );
    }
}

export default Recorder;
