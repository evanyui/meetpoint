import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import amber from '@material-ui/core/colors/amber';
import Grid from '@material-ui/core/Grid';
import Top from './Top';
import Bottom from './Bottom';
import Box from '@material-ui/core/Box';
import {findFirstDiff} from '../utils/algorithm';
import Timer from '../utils/Timer';

import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: { main: amber[600], contrastText: 'white' }, 
        secondary: {main: "#637796", contrastText: 'white' }
    },
    spacing: 16,
});

class App extends Component {
    constructor(props) {
        super(props);
        this.updateTranscripts = this.updateTranscripts.bind(this);
        this.updateCurrentTranscript = this.updateCurrentTranscript.bind(this);
        this.state = {
            transcripts: [],
            currentTranscript: []
        };
    }

    updateTranscripts() {
        this.setState((prevState) => {
            return {
                transcripts: [...prevState.transcripts, ...prevState.currentTranscript],
                currentTranscript: []
            };
        });
    }

    updateCurrentTranscript(transcript) {
        this.setState((prevState) => {
            const prevTranscript = prevState.currentTranscript.map((each) => {return each.word});
            const currentTranscript = transcript.trim().split(' ');
            const diffStart = findFirstDiff(currentTranscript, prevTranscript);
            const time = Timer.markTimer();
            let words = [];
            let updatedPrevTranscript = prevState.currentTranscript;
            if (diffStart < 0 || prevTranscript.includes(currentTranscript)) {
            // If there's no difference
                return; // Do nothing
            } else if (diffStart === 0) {
            // If it is different from the start,
                // Find the same first word and append the difference from there (Union merge)
                // Example: 
                // I can show you
                // <the world>
                const sameStart = prevTranscript.indexOf(currentTranscript[0]);
                updatedPrevTranscript = prevState.currentTranscript.slice(0, sameStart);
                words = currentTranscript;
            } else {
            // If found different somewhere else, update starting from there
            // Example: 
            //      I can <show>
            //      I can <see you>
                updatedPrevTranscript = prevState.currentTranscript.slice(0, diffStart);
                words = currentTranscript.slice(diffStart);
            }
            const newTranscript = words.map((word) => ({word, time}));
            return {
                currentTranscript: [...updatedPrevTranscript, ...newTranscript]
            };
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
