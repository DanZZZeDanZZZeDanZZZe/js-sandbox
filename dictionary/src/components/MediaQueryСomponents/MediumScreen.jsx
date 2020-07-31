import React from 'react'
import MediaQuery from 'react-responsive'

function MediumScreen({children}) {
  return (
    <MediaQuery minDeviceWidth={768}>
      {children}
    </MediaQuery>
  )
}

export default MediumScreen