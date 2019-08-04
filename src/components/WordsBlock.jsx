import React, { PureComponent } from 'react';
import Box from '@material-ui/core/Box';
import { ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import * as audio from '../utils/AudioPlayer';

import '../styles/wordsblock.css';

class WordsBlock extends PureComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        if (audio) {
            console.log(this.props.time);
            audio.playAudio();
            audio.setTime(this.props.time);
        }
    }
    
    render() {
        return (
                <ButtonBase onClick={this.onClick} className="wordsblock">
                    <Box m={0.1}> 
                        <Typography variant="subtitle1">{this.props.value}</Typography>
                    </Box>
                </ButtonBase>
        );
    }
}

export default WordsBlock;