/* eslint-disable @typescript-eslint/no-non-null-assertion */

import React, { useLayoutEffect, useRef } from 'react'
import useBackgroundLoop from '../hooks/use-background-loop'

interface BackgroundProps {
  height?: number
  className?: string
  children?: React.ReactNode
}

const SplashBackground = ({ height = 600, className = '', children }: BackgroundProps) => {
  const canvas = useRef<HTMLCanvasElement>(null!)
  const container = useRef<HTMLDivElement>(null!)

  const onResize = () => {
    canvas.current.width = container.current.clientWidth
  }

  // keep track of our current animation frame for removal
  const animationFrame = useRef<number>()

  const { loop } = useBackgroundLoop()

  // loop function
  const canvasLoop = (ctx: CanvasRenderingContext2D) => {
    loop(ctx)
    // queue next animation frame
    animationFrame.current = requestAnimationFrame(() => canvasLoop(ctx))
  }

  // start canvas guy
  useLayoutEffect(() => {
    // on resize event
    window.addEventListener('resize', onResize)

    const ctx = canvas.current.getContext('2d')!

    // queue first frame
    animationFrame.current = requestAnimationFrame(() => canvasLoop(ctx))

    onResize()

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
    <div className={`absolute left-0 right-0 ${className}`} ref={container} style={{ height }}>
      <div className="bg-gray-light absolute inset-0" />
      <canvas
        ref={canvas}
        height={height}
        className="absolute"
      />
      <div className="bg-splash-triangles bg-triangles bg-center absolute inset-0" />

      <div className="absolute container inset-0 flex flex-col justify-center">
        {children}
      </div>
    </div>
  )
}

export default SplashBackground
