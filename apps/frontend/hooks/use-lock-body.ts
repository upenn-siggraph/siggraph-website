import { useEffect } from 'react'

const useLockBody = (locked: boolean) => {
  useEffect(() => {
    if (locked) {
      document.body.classList.add('overflow-y-hidden')
      return () => {
        document.body.classList.remove('overflow-y-hidden')
      }
    }
    document.body.classList.remove('overflow-y-hidden')
    return () => {}
  }, [locked])
}

export default useLockBody
