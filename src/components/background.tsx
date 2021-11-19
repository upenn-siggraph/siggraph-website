/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React, { useEffect, useRef } from 'react'
import useBackgroundLoop from '../hooks/use-background-loop'

interface BackgroundProps {
  height?: number,
  className?: string
}

const Background = ({ height = 600, className = '' }: BackgroundProps) => {
  const canvas = useRef<HTMLCanvasElement>(null!)

  const onResize = () => {
    canvas.current.width = document.body.scrollWidth
  }

  // keep track of our current animation frame for removal
  const animationFrame = useRef<number>()

  const { loop } = useBackgroundLoop(canvas)

  // loop function
  const canvasLoop = () => {
    loop()
    // queue next animation frame
    animationFrame.current = requestAnimationFrame(() => canvasLoop())
  }

  // start canvas guy
  useEffect(() => {
    // on resize event
    window.addEventListener('resize', onResize)

    // queue first frame
    console.log(`canvas is assigned? ${canvas.current !== null ? 'yes' : 'no'}`)
    console.log('ok now we request anim frame')
    animationFrame.current = requestAnimationFrame(canvasLoop)

    // when destroying component
    return () => {
      if (animationFrame.current !== undefined) {
        cancelAnimationFrame(animationFrame.current)
      }
      window.removeEventListener('resize', onResize)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas])

  return (
    <canvas
      ref={canvas}
      height={height}
      width={document.body.scrollWidth}
      className={className}
    />
  )
}

export default Background
