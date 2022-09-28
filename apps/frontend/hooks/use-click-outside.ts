import { RefObject, useCallback, useEffect } from 'react'

const useClickOutside = (callback: () => void, ref: RefObject<HTMLElement>) => {
  const onClick = useCallback(
    (evt: MouseEvent) => {
      if ((evt.target as HTMLElement).contains(ref.current)) {
        callback()
      }
    },
    [ref, callback]
  )

  useEffect(() => {
    if (!ref) return () => {}
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [ref, onClick])
}

export default useClickOutside
