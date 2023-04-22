import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, clickTimes: 0}

  startBtnClicked = () => {
    const {clickTimes} = this.state
    this.setState(prevState => ({clickTimes: prevState.clickTimes + 1}))
    if (clickTimes === 1) {
      this.myInterval = setInterval(() => {
        const {seconds} = this.state
        if (seconds === 59) {
          this.setState(prevState => ({
            minutes: prevState.minutes + 1,
            seconds: 0,
          }))
        }
        if (seconds < 59) {
          this.setState(prevState => ({seconds: prevState.seconds + 1}))
        }
      }, 1000)
    }
  }

  stopBtnClicked = () => {
    clearInterval(this.myInterval)
    this.setState({clickTimes: 0})
  }

  resetBtnClicked = () => {
    this.setState({minutes: 0, seconds: 0, clickTimes: 0})
    clearInterval(this.myInterval)
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="mainContainer">
        <h1 className="mainHead">Stopwatch</h1>
        <div className="timerContainer">
          <div className="imageAndText">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="clockImage"
              alt="stopwatch"
            />
            <p className="spanCSS">Timer</p>
          </div>
          <h1 className="timerText">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="buttonsContainer">
            <button
              onClick={this.startBtnClicked}
              type="button"
              className="button StartBtn"
            >
              Start
            </button>
            <button
              onClick={this.stopBtnClicked}
              type="button"
              className="button StopBtn"
            >
              Stop
            </button>
            <button
              onClick={this.resetBtnClicked}
              type="button"
              className="button ResetBtn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
