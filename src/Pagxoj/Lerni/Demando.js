import React from 'react'

export default () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap' }}>
      <div
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'var(--success)',
          margin: '0px'
        }}
      />
      <div
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'var(--secondary)',
          margin: '0px'
        }}
      />
      <div
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'var(--warning)',
          margin: '0px'
        }}
      />
      <div
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: 'var(--danger)',
          margin: '0px'
        }}
      />
      <div
        style={{
          width: '100%',
          position: 'absolute',
          top: '50%',
          left: '0',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '3em',
          boxSizing: 'border-box',
          color: 'white',
          textShadow:
            '1px 1px 0 #000,-1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000,0px 1px 0 #000,0px -1px 0 #000,-1px 0px 0 #000,1px 0px 0 #000,2px 2px 0 #000,-2px 2px 0 #000,2px -2px 0 #000,-2px -2px 0 #000,0px 2px 0 #000,0px -2px 0 #000,-2px 0px 0 #000,2px 0px 0 #000,1px 2px 0 #000,-1px 2px 0 #000,1px -2px 0 #000,-1px -2px 0 #000,2px 1px 0 #000,-2px 1px 0 #000,2px -1px 0 #000,-2px -1px 0 #000'
        }}
      >
        Saluton!
      </div>
    </div>
  )
}
