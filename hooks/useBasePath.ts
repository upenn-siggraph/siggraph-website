import { useRouter } from 'next/router'
import { useCallback } from 'react'

const useBasePath = () => {
  const { basePath } = useRouter()

  const getPath = useCallback(
    (path: string) => (basePath.charAt(0) === '/' ? basePath + path : path),
    [basePath]
  )

  return { basePath, getPath }
}

export default useBasePath
