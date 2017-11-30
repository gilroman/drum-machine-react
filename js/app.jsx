// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import glamorous from 'glamorous';
import Display from './Display';
import DrumPad from './DrumPad';
import Lines from './Lines';

const Buttons = glamorous.div({
  width: '100%',
  alignSelf: 'flex-end',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  marginBottom: '4%'
});

const MachineBody = glamorous.div({
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '5px',
  backgroundColor: '#2e3740'
});

const MachineContainer = glamorous.div({
  position: 'relative',
  height: 0,
  paddingBottom: '57%'
});

const Row = glamorous.div({
  display: 'flex',
  width: '100%',
  flexFlow: 'row wrap',
  paddingTop: '2%'
});

type State = {
  pad65isActive: boolean,
  pad83isActive: boolean,
  pad68isActive: boolean,
  pad74isActive: boolean,
  pad75isActive: boolean,
  pad76isActive: boolean
};

class App extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      pad65isActive: false,
      pad83isActive: false,
      pad68isActive: false,
      pad74isActive: false,
      pad75isActive: false,
      pad76isActive: false
    };

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (!audio) return;
      // set the audio file play location to the beginning of the fil
      if (audio instanceof HTMLAudioElement) {
        audio.currentTime = 0;
        audio.play();
      }
      // set the state property corresponding to the appropriate button as active
      switch (e.keyCode) {
        case 65:
          this.setState({ pad65isActive: true });
          break;
        case 83:
          this.setState({ pad83isActive: true });
          break;
        case 68:
          this.setState({ pad68isActive: true });
          break;
        case 74:
          this.setState({ pad74isActive: true });
          break;
        case 75:
          this.setState({ pad75isActive: true });
          break;
        case 76:
          this.setState({ pad76isActive: true });
          break;
        default:
          break;
      }
    });
  }

  handleTransitionEnd: Function;

  handleTransitionEnd(key): void {
    switch (key) {
      case '65':
        this.setState({ pad65isActive: false });
        break;
      case '83':
        this.setState({ pad83isActive: false });
        break;
      case '68':
        this.setState({ pad68isActive: false });
        break;
      case '74':
        this.setState({ pad74isActive: false });
        break;
      case '75':
        this.setState({ pad75isActive: false });
        break;
      case '76':
        this.setState({ pad76isActive: false });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <MachineContainer>
        <MachineBody>
          <Row>
            <Display />
            <Lines />
          </Row>
          <Buttons>
            <DrumPad
              key="65"
              id="65"
              label="A"
              padName="Kick"
              isActive={this.state.pad65isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
            <DrumPad
              key="83"
              id="83"
              label="S"
              padName="Snare"
              isActive={this.state.pad83isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
            <DrumPad
              key="68"
              id="68"
              label="D"
              padName="Open Hat"
              isActive={this.state.pad68isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
            <DrumPad
              key="74"
              id="74"
              label="J"
              padName="Closed Hat"
              isActive={this.state.pad74isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
            <DrumPad
              key="75"
              id="75"
              label="K"
              padName="Cymbal"
              isActive={this.state.pad75isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
            <DrumPad
              key="76"
              id="76"
              label="L"
              padName="Clap"
              isActive={this.state.pad76isActive}
              handleTransitionEnd={this.handleTransitionEnd}
            />
          </Buttons>
        </MachineBody>
        <audio data-key="65" src="/public/sounds/dr_110-kick.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-kick.vtt" />
        </audio>
        <audio data-key="83" src="/public/sounds/dr_110-snare.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-snare.vtt" />
        </audio>
        <audio data-key="68" src="/public/sounds/dr_110-openHiHat.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-openHiHat.vtt" />
        </audio>
        <audio data-key="74" src="/public/sounds/dr_110-closedHiHat.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-closedHiHat.vtt" />
        </audio>
        <audio data-key="75" src="/public/sounds/dr_110-cymbal.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-cymbal.vtt" />
        </audio>
        <audio data-key="76" src="/public/sounds/dr_110-clap.mp3">
          <track kind="captions" label="DR-110 Kick" src="/sounds/dr_110-clap.vtt" />
        </audio>
      </MachineContainer>
    );
  }
}

const renderApp = () => {
  const appDivElement = document.getElementById('app');

  if (document && appDivElement) {
    render(<App />, appDivElement);
  }
};

renderApp();
