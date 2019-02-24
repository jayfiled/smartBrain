import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new clarifai.App({
  apiKey: '5ee068d0215f4be4b3bde048589789ad'
})

const particlesOptions = {
    particles: {
      number: {
        value: 5,
        density: {
          enable: true,
          value_area: 50
        }
      }
    }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    // get the bounding box numbers to calculate where the face border is in the pic
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      // left-col property (in percentage) * the width of the image
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      // the calculation starts from the left by default, so 
      // subtract the width/height to get the other boundary
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

    }
    // console.log(width, height);
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({
      box: box
    })
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit= () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particlesOptions} />
        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit} />
       <FaceRecognition 
       imageUrl={this.state.imageUrl}
       faceBox={this.state.box}
       />
      </div>
    );
  }
}

export default App;
