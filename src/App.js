import React, { Component } from 'react';
import './App.css';
import logo from'./assest/Logo.jpg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Dalila Ksir',
        bio: 'A web developer',
        imgSrc: logo,
        profession: 'Software Engineer',
      },
      show: false,
      intervalInSeconds: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        intervalInSeconds: prevState.intervalInSeconds + 1,
      }));
    }, 1000); // Update every second (1000 milliseconds)
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Clear the interval when the component unmounts
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, intervalInSeconds } = this.state;

    return (
      <div>
        <h1>Person Profile App</h1>
        <button onClick={this.toggleShow}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time Interval Since Mount: {intervalInSeconds} seconds</p>
      </div>
    );
  }
}

export default App;

