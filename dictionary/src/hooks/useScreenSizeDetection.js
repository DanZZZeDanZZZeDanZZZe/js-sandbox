import { useMediaQuery } from 'react-responsive'

function useScreenSizeDetection(size = 'medium') {
  const metrics = {
    'extra lrage': 1280,
    'lrage': 1024,
    'medium': 768,
    'small': 640
  }

  return useMediaQuery({ minDeviceWidth: metrics[size]})
}

export default useScreenSizeDetection