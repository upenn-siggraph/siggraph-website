import { useEffect, useRef } from 'react'
import useBasePath from '../../hooks/useBasePath'

const VideoBG = () => {
  const { getPath } = useBasePath()
  const videoRef = useRef<HTMLVideoElement>(null)

  const updateTime = () => {
    if (!videoRef.current) return
    videoRef.current.style.filter = `blur(7px) hue-rotate(${
      (Date.now() / 100) % 360
    }deg)`
  }

  useEffect(() => {
    updateTime()
    const i = setInterval(updateTime, 500)
    return () => {
      clearInterval(i)
    }
  }, [])

  return (
    <video
      autoPlay
      muted
      className="h-full w-full min-h-[56.25vw] min-w-[177.78vh]"
      ref={videoRef}
      loop
    >
      <source src={getPath('/video/background.mp4')} />
    </video>
  )
}

export default VideoBG
