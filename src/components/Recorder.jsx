import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import PostRecordControls from './PostRecordControls';
import RecordingControls from './RecordingControls';
import InitialControls from './InitialControls';
import { STATUS } from '../utils/constants';

class Recorder extends Component {

    constructor(props) {
        super(props);
        this.stateChange = this.stateChange.bind(this);
        this.state = {
            status: STATUS[0]
        };
    }

    stateChange(status) {
        this.setState({
            status
        });
    }

    getControls() {
        if (this.state.status === STATUS[0]) {
            return (<InitialControls stateChange={this.stateChange}/>);
        } else if (this.state.status === STATUS[1]) {
            return (<RecordingControls stateChange={this.stateChange}/>);
        } else if (this.state.status === STATUS[2]) {
            return (<PostRecordControls/>);
        }
    }

    render() {
        return (
            <Paper>
                <Box p={2}>
                    {this.getControls()}
                </Box>
            </Paper>
        );
    }
}

export default Recorder;
