import { useState, useEffect } from 'react'

export default function useLoading(minLoadTime: number) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, minLoadTime)

    return () => clearTimeout(timer)
  }, [minLoadTime])

  return isLoading
}