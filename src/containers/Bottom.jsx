import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Transcript from '../components/Transcript';
import TitleBar from '../components/TitleBar';

class Bottom extends Component {

    render() {
        return (
            <Grid container
            direction="column"
            justify="center"
            alignItems="stretch">
                <Grid item>
                    <TitleBar/>
                </Grid>
                <Grid item>
                    <Transcript transcripts={this.props.transcripts} />
                </Grid>
            </Grid>
        )
    }
}

export default Bottom
