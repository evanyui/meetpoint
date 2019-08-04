const DELAY = 1;

class Timer {

    startTimer() {
        this.startTime = new Date();
    }

    // Returns seconds elapsed from start time
    markTimer() {
        this.mark = new Date();
        const diff = Math.floor((this.mark - this.startTime)/1000) - DELAY;
        return diff < 0? 0 : diff;
    }
}

export default new Timer();