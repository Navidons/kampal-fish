"use client"

import { useEffect, useRef, useState } from "react"

interface IntersectionObserverProps {
  children: React.ReactNode
  onIntersect?: () => void
  threshold?: number
  rootMargin?: string
  className?: string
}

export function IntersectionObserver({
  children,
  onIntersect,
  threshold = 0.1,
  rootMargin = "50px",
  className = ""
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onIntersect?.()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, onIntersect])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
