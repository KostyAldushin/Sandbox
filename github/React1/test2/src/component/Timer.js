import React, {Component} from "react";
import PropTypes from "prop-types";

export default  class Timer extends Component{
    static propTypes = {
        minutes: PropTypes.number.isRequired,
        seconds: PropTypes.number.isRequired,
        array: PropTypes.arrayOf(PropTypes.number)
    }

    static defaultProps = {
        minutes: 0,
        seconds: 0
    }

    state = {
        minutes: this.props.minutes,
        seconds: this.props.seconds
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.seconds % 2 === 0;
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            minutes: nextProps.minutes,
            seconds: nextProps.seconds
        })
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log("One second");
            this.setState((prevState) => {
                let minutes = parseInt(this.state.minutes);
                let seconds = parseInt(this.state.seconds);
                seconds++;
                if(seconds > 59) {
                    seconds = 0;
                    minutes++;
                }
                return {
                    minutes,
                    seconds
                }
            });
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        let {minutes, seconds} = this.state;
        return (
            <div className="timer" style={{
                fontSize: "64px"
            }}>
                <span className="minutes">{
                    (minutes < 10) ? "0" + minutes : minutes
                }</span>
                :
                <span className="seconds">{
                    (seconds < 10) ? "0" + seconds : seconds
                }</span>
            </div>
        )
    }
}
