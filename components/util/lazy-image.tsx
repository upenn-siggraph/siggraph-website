import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazyImageProps extends ComponentPropsWithoutRef<'div'> {
  image: LqipImage
  width: number
  height: number
  alt: string
}

const LazyImage = ({
  image: { dataURI, src },
  alt,
  width,
  height,
  className,
  ...props
}: LazyImageProps) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const [loaded, setLoaded] = useState(false)

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imageRef.current) {
      if (imageRef.current.complete) {
        setLoaded(true)
      }
    }
  }, [inView, imageRef])

  return (
    <div
      {...props}
      ref={ref}
      style={{
        background: `center / cover no-repeat url(${dataURI})`,
      }}
      className={`overflow-hidden flex flex-col justify-center items-center ${
        className || ''
      }`}
    >
      {inView && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => {
            setLoaded(true)
          }}
          className={`transition-[opacity,filter] w-full h-auto ${
            loaded ? '' : 'opacity-0 blur-[20px]'
          }`}
        />
      )}
    </div>
  )
}

export default LazyImage
