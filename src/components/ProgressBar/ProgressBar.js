/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + 'px',
    "--padding": "0"
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + 'px',
    "--padding": "0"
  },
  large: {
    "--borderRadius": 8 + "px",
    "--height": 24 + 'px',
    "--padding": "4px"
  }
};
const ProgressBar = ({ value, size }) => {

  const styles = SIZES[size];
  return <Wrapper style={styles} value={value}><Bar width={value} /></Wrapper>
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: ${props => props.value > 98 ? 'var(--borderRadius) var(--height) var(--height) var(--borderRadius)' :  'var(--borderRadius)'};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.gray50};
`
const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${props => props.width + '%'};
`

export default ProgressBar;
