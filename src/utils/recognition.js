const recognition = new webkitSpeechRecognition(); // eslint-disable-line
recognition.interimResults = true;
recognition.continuous = true;
recognition.onend = recognition.start;

export default recognition;