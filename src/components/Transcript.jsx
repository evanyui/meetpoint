import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import WordsBlock from './WordsBlock';

class Transcript extends Component {

    render() {
        let wordsBlockList = [];
        if (this.props.transcripts.length) {
            let wordsCollection = "";
            let prevTimeStamp = this.props.transcripts[0];
            for (let i = 0; i < this.props.transcripts.length+1; i++) {

                if (i === this.props.transcripts.length) {
                    wordsBlockList.push(<WordsBlock key={i} value={wordsCollection} time={prevTimeStamp}/>);
                    break;
                }

                const transcript = this.props.transcripts[i];
                if (transcript.time !== prevTimeStamp) {
                    const wordsBlock = (<WordsBlock key={i} value={wordsCollection} time={prevTimeStamp}/>);
                    wordsBlockList.push(wordsBlock);
                    wordsCollection = transcript.word + " ";
                } else {
                    wordsCollection += transcript.word + " ";
                }
                prevTimeStamp = transcript.time;
            }
        }

        return (
            <Grid container
            justify="center"
            alignItems="stretch">
                <Grid item xs={10}>
                    {wordsBlockList}
                    <Typography color="secondary" variant="subtitle1">{this.props.currentTranscript.map((each) => each.word).join(' ')}</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Transcript;