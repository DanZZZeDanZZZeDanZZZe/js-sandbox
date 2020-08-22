import React from 'react'
import MediaQuery from 'react-responsive'

function ExtraLargeScreen({children}) {
  return (
    <MediaQuery minDeviceWidth={1280}>
      {children}
    </MediaQuery>
  )
}

export default ExtraLargeScreen