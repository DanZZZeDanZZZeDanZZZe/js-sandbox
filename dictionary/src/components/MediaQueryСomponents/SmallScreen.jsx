import React from 'react'
import MediaQuery from 'react-responsive'

function SmallScreen({children}) {
  return (
    <MediaQuery minDeviceWidth={640}>
      {children}
    </MediaQuery>
  )
}

export default SmallScreen