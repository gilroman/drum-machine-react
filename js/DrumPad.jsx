// @flow

import React from 'react';
import glamorous from 'glamorous';

const Button = glamorous.button({
  backgroundColor: 'transparent',
  border: 'none',
  ':focus': { outline: 0 }
});

const Column = glamorous.div({
  width: '14.33%',
  marginLeft: '2%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexFlow: 'column nowrap'
});

const PadRing = glamorous.div(
  {
    width: '7vw',
    height: '7vw',
    borderRadius: '50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'border 0.04s ease-in'
  },
  props => {
    if (props.isActive) {
      return {
        border: 'solid 2px #34b3fa'
      };
    }
    return null;
  }
);

const Pad = glamorous.div(
  {
    backgroundColor: '#ff7596',
    width: '6vw',
    height: '6vw',
    borderRadius: '50%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    transition: 'transform 0.04s ease-in'
  },
  props => {
    if (props.isActive) {
      return {
        transform: 'scale(1.1)'
      };
    }
    return null;
  }
);

const KeyboardKey = glamorous.kbd({
  fontSize: '48px',
  opacity: 1,
  '@media(max-width: 910px)': {
    fontSize: '36px'
  },
  '@media(max-width: 480px)': {
    fontSize: '24px'
  }
});

const PadName = glamorous.div({
  alignSelf: 'center',
  color: '#585e45'
});

type Props = {
  label: string,
  padName: string,
  id: string,
  isActive: boolean,
  handleClick: (key: string, e: SyntheticEvent<HTMLButtonElement>) => void,
  handleTransitionEnd: (id: string, e: SyntheticTransitionEvent<HTMLDivElement>) => void
};

// For the css style of the kbd element the text-gradient is being used from the style.css sheet because glamoroud doesn't support the background-clip property

const DrumPad = (props: Props) => (
  <Column>
    <Button
      onClick={e => {
        props.handleClick(props.id, e);
      }}
    >
      <PadRing isActive={props.isActive} onTransitionEnd={e => props.handleTransitionEnd(props.id, e)}>
        <Pad isActive={props.isActive}>
          <KeyboardKey className="text-gradient">{props.label}</KeyboardKey>
        </Pad>
      </PadRing>
      <PadName>{props.padName}</PadName>
    </Button>
  </Column>
);

export default DrumPad;
