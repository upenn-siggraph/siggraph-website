'use client'

import { ComponentPropsWithoutRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazyImageProps extends ComponentPropsWithoutRef<'div'> {
  image: string
  lqip: string
  width: number
  height: number
  alt: string
}

export const LazyImage = ({
  image,
  lqip,
  alt,
  width,
  height,
  className,
  ...props
}: LazyImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      {...props}
      ref={ref}
      className={`relative flex flex-col items-center justify-center overflow-hidden ${
        className || ''
      }`}
    >
      <div
        className="absolute inset-0 scale-110 blur-[15px]"
        style={{
          background: `center / cover no-repeat url(${lqip})`,
        }}
      />
      {inView && (
        // Custom image implementation.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => {
            setLoaded(true)
          }}
          className={`relative h-auto w-full transition-[opacity,filter] duration-200 ${
            loaded ? '' : 'opacity-0 blur-[15px]'
          }`}
        />
      )}
    </div>
  )
}
