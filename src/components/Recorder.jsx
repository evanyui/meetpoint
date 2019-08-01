import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PlaybackControls from './PlaybackControls';
import RecordingControls from './RecordingControls';
import InitialControls from './InitialControls';
import { STATUS } from '../utils/constants';
import recognition from '../utils/recognition';
import { ReactMic } from 'react-mic';

import '../styles/recorder.css';

class Recorder extends Component {

    constructor(props) {
        super(props);
        this.stateChange = this.stateChange.bind(this);
        this.onRecognition = this.onRecognition.bind(this);
        this.onStop = this.onStop.bind(this);
        this.recognition = recognition;
        this.recognition.onresult = this.onRecognition;
        this.state = {
            status: STATUS[0], // initial status
            blobURL: null
        };
    }

    onRecognition(event) {
        const result = event.results[event.results.length-1];
        if (result.isFinal) {
            this.props.updateTranscripts(result[0].transcript);
        } else {
            this.props.updateCurrentTranscript(result[0].transcript);
        }
    }

    switchRecognition(status) {
        if (status === STATUS[1]) {
            recognition.start();
        } else if (status === STATUS[2]) {
            recognition.onend = undefined; // cut off continuity
            recognition.stop();
            // Stop recording after calling onStop() to save recorded audio blob 
            // this.setState({recording: false});
        }
    }

    stateChange(status) {
        this.setState({
            status
        });
        this.switchRecognition(status);
    }

    getControls() {
        if (this.state.status === STATUS[0]) {
            return (<InitialControls stateChange={this.stateChange}/>);
        } else if (this.state.status === STATUS[1]) {
            return (<RecordingControls stateChange={this.stateChange}/>);
        } else if (this.state.status === STATUS[2]) {
            return (<PlaybackControls/>);
        }
    }

    onStop(blobObject) {
        this.setState({blobURL: blobObject.blobURL});
    }

    getVisualizerOrPlayer() {
        if (this.state.blobURL && this.state.status === STATUS[2]) {
            return (
                <audio 
                style={{width: "-webkit-fill-available"}}
                ref="audioSource" 
                controls="controls" 
                src={this.state.blobURL}
                preload={true}
                />);
        } else {
            return (
                <ReactMic
                record={this.state.status === STATUS[1]}
                onStop={this.onStop}
                strokeColor="#637796"
                backgroundColor="#f1f3f4"
                visualSetting="frequencyBars"
                />);
        }
    }

    render() {
        return (
            <Paper
            elevation={3}
            style={{
                borderRadius: 16
            }}>
                <Box height={200} p={2} borderRadius={50}>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    style={{height: "-webkit-fill-available"}}>
                        <Box mb={1}>
                        {this.getVisualizerOrPlayer()}
                        </Box>
                        {this.getControls()}
                    </Grid>
                </Box>
            </Paper>
        );
    }
}

export default Recorder;
