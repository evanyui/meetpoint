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
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Box m={4}>
                    <Grid container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={10}>
                        <Grid item>
                            <Top/>
                        </Grid>
                        <Grid item>
                            <Bottom/>
                        </Grid>
                    </Grid>
                </Box>
            </MuiThemeProvider>
        );
    }
}

export default App;
