import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import Grid from '@material-ui/core/Grid';
import Top from './Top';
import Bottom from './Bottom';
import Box from '@material-ui/core/Box';
import {findFirstDiff} from '../utils/algorithm';

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
        this.updateCurrentTranscript = this.updateCurrentTranscript.bind(this);
        this.state = {
            transcripts: [],
            currentTranscript: ""
        };
    }

    updateTranscripts(transcript) {
        this.setState((prevState) => {
            return {
                transcripts: [...prevState.transcripts, transcript],
                currentTranscript: ""
            };
        });
    }

    updateCurrentTranscript(transcript) {
        this.setState((prevState) => {
            const prevTranscript = prevState.currentTranscript.trim();
            const currentTranscript = transcript.trim();
            const diffStart = findFirstDiff(currentTranscript, prevTranscript);
            if (diffStart < 0 || prevTranscript.includes(currentTranscript)) {
            // If there's no difference
                return; // Do nothing
            } else if (diffStart === 0) {
            // If it is different from the start
                const sameStart = prevTranscript.indexOf(currentTranscript.split(" ")[0]);
                // Find the same first word and append the difference from there (Union merge)
                return {
                    currentTranscript: prevTranscript.substring(0, sameStart) 
                            + currentTranscript
                };
            } else {
            // If found different somewhere, update starting from there
                return {
                    currentTranscript: prevTranscript.substring(0, diffStart) 
                            + currentTranscript.substring(diffStart)
                };
            }
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
                            <Top 
                            updateTranscripts={this.updateTranscripts}
                            updateCurrentTranscript={this.updateCurrentTranscript}/>
                        </Grid>
                        <Grid item>
                            <Bottom 
                            transcripts={this.state.transcripts} 
                            currentTranscript={this.state.currentTranscript}/>
                        </Grid>
                    </Grid>
                </Box>
            </MuiThemeProvider>
        );
    }
}

export default App;
