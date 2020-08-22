import React from 'react'
import MediaQuery from 'react-responsive'

function LargeScreen({children}) {
  return (
    <MediaQuery minDeviceWidth={1024}>
      {children}
    </MediaQuery>
  )
}

export default LargeScreen