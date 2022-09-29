import { ComponentPropsWithoutRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazyImageProps extends ComponentPropsWithoutRef<'div'> {
  image: string
  lqip: string
  width: number
  height: number
  alt: string
}

const LazyImage = ({
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
      className={`relative overflow-hidden flex flex-col justify-center items-center ${
        className || ''
      }`}
    >
      <div
        className="absolute inset-0 blur-[15px] scale-110"
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
          className={`relative transition-[opacity,filter] duration-200 w-full h-auto ${
            loaded ? '' : 'blur-[15px] opacity-0'
          }`}
        />
      )}
    </div>
  )
}

export default LazyImage
