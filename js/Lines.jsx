// @flow

import React from 'react';
import glamorous from 'glamorous';

const LinesRow = glamorous.div({
  display: 'flex',
  width: '100%',
  flexFlow: 'row wrap',
  justifyContent: 'flex-end',
  paddingTop: 0,
  paddingRight: '2%'
});

const LinesContainer = glamorous.div({
  width: '47%',
  justifyContent: 'flex-end',
  paddingTop: 0,
  paddingRight: '2%',
  marginLeft: '2%'
});

const Line = glamorous.div({
  height: '2px',
  width: '100%',
  marginBottom: '3%',
  backgroundColor: '#f5d04c'
});

const Lines = () => (
  <LinesRow>
    <LinesContainer>
      <Line />
      <Line />
      <Line />
    </LinesContainer>
  </LinesRow>
);

export default Lines;
