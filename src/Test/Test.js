import Webcam from "react-webcam";
import React from "react";

export default class Text extends React.Component {
  state = {
    image: null
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    this.setState({
      image: this.webcam.getScreenshot()
    });
    //this.state.image
  };

  render() {
    const videoConstraints = {
      width: window.innerHeight,
      height: window.innerWidth,
      facingMode: "environment" //user for front, environment for rear
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={window.innerHeight}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={window.innerWidth}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture</button>
        <img src={this.state.image} />
      </div>
    );
  }
}
