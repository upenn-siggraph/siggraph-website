/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  MutableRefObject, useEffect, useRef, useState,
} from 'react'

interface TrianglesConfig {
  bgColor: string;
  lineColor: string;
  triangleSize: number;
  lineWidth: number;
}

const defaultTrianglesConfig: TrianglesConfig = {
  bgColor: '#fff',
  lineColor: '#000',
  triangleSize: 130,
  lineWidth: 4,
}

// triangle drawing function
const drawTriangles = (ctx: CanvasRenderingContext2D, {
  bgColor, lineColor, triangleSize, lineWidth,
}: TrianglesConfig) => {
  const { width, height } = ctx.canvas
  ctx.strokeStyle = lineColor
}

// actual hook
const useBackgroundLoop = (canvasRef: MutableRefObject<HTMLCanvasElement>) => {
  const lastFrame = useRef<number>(Date.now())
  const ctx = useRef<CanvasRenderingContext2D>()

  // assign current ctx
  useEffect(() => {
    if (canvasRef.current !== null) {
      ctx.current = (canvasRef.current.getContext('2d')!)
    }
  }, [canvasRef])

  const loop = () => {
    // const dt = Date.now() - lastFrame.current

    drawTriangles(ctx.current!, defaultTrianglesConfig)

    lastFrame.current = Date.now()
  }

  return { loop }
}

export default useBackgroundLoop
