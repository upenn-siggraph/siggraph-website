import { useCallback, useEffect, useState } from 'react'

const getRatio = () => {
  if (window === undefined) return 1
  return window.innerWidth / window.innerHeight
}

export const useAspectRatio = () => {
  const [ratio, setRatio] = useState<number>(1)

  const resizeCallback = useCallback(() => {
    setRatio(getRatio())
  }, [])

  useEffect(() => {
    if (window === undefined) return () => {}
    resizeCallback()
    window.addEventListener('resize', resizeCallback)
    return () => {
      window.removeEventListener('resize', resizeCallback)
    }
  }, [resizeCallback])

  return ratio
}
