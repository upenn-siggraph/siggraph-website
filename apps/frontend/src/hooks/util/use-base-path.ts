import { useRouter } from 'next/router'
import { useCallback } from 'react'

// TODO: eventually if we host on some apex we won't need to worry about this
export const useBasePath = () => {
  const { basePath } = useRouter()

  const getPath = useCallback(
    // if we don't have an empty default path...
    (path: string) => `${basePath}/${path}`,
    [basePath]
  )

  return { basePath, getPath }
}
