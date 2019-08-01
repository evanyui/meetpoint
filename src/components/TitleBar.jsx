import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class TitleBar extends Component {
    render() {
        return (
            <Grid container
            justify="center"
            alignItems="stretch">
                <Grid item xs={10}>
                    <Grid container
                    justify="space-between"
                    alignItems="center">
                        <Grid item>
                            <Typography 
                            variant="h2" 
                            style={{fontWeight: 600, color: "lightGray"}}>
                                Transcript
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                            variant="contained"
                            size="small"
                            style={{backgroundColor: "#6984a9", color: "white", textTransform: "none"}}>
                                Download Transcript
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        );
    }
}

export default TitleBar;