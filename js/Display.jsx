import React from 'react';
import glamorous from 'glamorous';

const Column = glamorous.div({
  width: '47%',
  marginLeft: '2%'
});

const DisplayContainer = glamorous.div({
  position: 'relative',
  width: '95%',
  height: 0,
  paddingBottom: '50%'
});

const DisplayArea = glamorous.div({
  position: 'absolute',
  display: 'flex',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  backgroundColor: '#313a42',
  opacity: 1
});

const Display = () => (
  <Column>
    <DisplayContainer>
      <DisplayArea>
        <img src="/public/img/DR110.svg" alt="DR 110" />
      </DisplayArea>
    </DisplayContainer>
  </Column>
);

export default Display;
