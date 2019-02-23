import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
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
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit= () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.calculateFaceLocation(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles'
                params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
         onInputChange={this.onInputChange}
         onButtonSubmit={this.onButtonSubmit} />
       <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
