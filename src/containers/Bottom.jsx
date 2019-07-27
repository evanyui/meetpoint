import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Bottom extends Component {
    render() {
        return (
            <Grid container
            justify="center"
            alignItems="center"
            spacing={1}>
                <Grid item xs={10}>
                    {this.props.transcripts.map((transcript, index) => {
                        return (<Typography key={index} variant="subtitle1">{transcript}</Typography>);
                    })}
                </Grid>
            </Grid>
        )
    }
}

export default Bottom
