import React from 'react';
import { Blob } from 'react-blob'

const BackgroundBlob = ({size, style, props}) => (
  <Blob size={size}
    style={{
        position: 'absolute',
        zIndex: -1,
        color: 'white',
        fontSize: '50vh',
        ...style
    }}
    {...props}
  />
)
export default BackgroundBlob;