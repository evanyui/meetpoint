import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

class Bottom extends Component {
    render() {
        return (
            <Grid container
            justify="center"
            alignItems="center"
            spacing={1}>
                <Grid item xs={10}>
                    <div>Something goes here</div>
                </Grid>
            </Grid>
        )
    }
}

export default Bottom
