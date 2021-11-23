/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  useRef,
} from 'react'

// triangle drawing function
const drawLoop = (ctx: CanvasRenderingContext2D) => {
  const { width, height } = ctx.canvas
  ctx.fillStyle = '#d0a584'
  ctx.fillRect(0, 0, width, height)
}

// actual hook
const useBackgroundLoop = () => {
  const lastFrame = useRef<number>(Date.now())

  const loop = (ctx: CanvasRenderingContext2D) => {
    // const dt = Date.now() - lastFrame.current
    drawLoop(ctx)
    lastFrame.current = Date.now()
  }

  return { loop }
}

export default useBackgroundLoop
