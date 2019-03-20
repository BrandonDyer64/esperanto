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
    </div>
  )
}
