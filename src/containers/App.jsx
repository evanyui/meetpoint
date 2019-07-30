import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import Grid from '@material-ui/core/Grid';
import Top from './Top';
import Bottom from './Bottom';
import Box from '@material-ui/core/Box';

import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: { main: amber[600], contrastText: 'white' }, 
        secondary: {main: amber[400], contrastText: 'white' }
    },
    spacing: 16
});

class App extends Component {
    constructor(props) {
        super(props);
        this.updateTranscripts = this.updateTranscripts.bind(this);
        this.state = {
            transcripts: []
        };
    }

    updateTranscripts(transcript) {
        this.setState((prevState) => {
            return {transcripts: [...prevState.transcripts, transcript]}
        });
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box m={4}>
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={4}>
                        <Grid item>
                            <Top updateTranscripts={this.updateTranscripts}/>
                        </Grid>
                        <Grid item>
                            <Bottom transcripts={this.state.transcripts}/>
                        </Grid>
                    </Grid>
                </Box>
            </MuiThemeProvider>
        );
    }
}

export default App;
