import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useBasePath = () => {
  const { basePath } = useRouter()

  const getPath = useCallback(
    // if we don't have an empty default path...
    (path: string) => `${basePath}/${path}`,
    [basePath]
  )

  return { basePath, getPath }
}
