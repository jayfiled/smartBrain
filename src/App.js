import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import clarifai from 'clarifai';

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
    }
  }



  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit= () => {
    console.log('clicked');
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg")
      .then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
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
       {/*  <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
