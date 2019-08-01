import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Transcript extends Component {

    render() {
        return (
            <Grid container
            justify="center"
            alignItems="stretch">
                <Grid item xs={10}>
                    {this.props.transcripts.map((transcript, index) => {
                        return (<Typography key={index} variant="subtitle1">{transcript}</Typography>);
                    })}
                    <Typography color="secondary" variant="subtitle1">{this.props.currentTranscript}</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Transcript;