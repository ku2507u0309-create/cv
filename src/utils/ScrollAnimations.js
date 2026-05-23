import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1
      },
      opacity: 1,
      y: 0,
      duration: 1
    })
  }, [])

  return elementRef
}

export const useParallaxEffect = (speed = 0.5) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    gsap.to(elementRef.current, {
      scrollTrigger: {
        trigger: elementRef.current,
        onUpdate: (self) => {
          gsap.to(elementRef.current, {
            y: self.getVelocity() * speed,
            overwrite: 'auto',
            duration: 0.5
          })
        }
      }
    })
  }, [])

  return elementRef
}

export const useCounterAnimation = (target, duration = 2) => {
  const elementRef = useRef(null)
  const countRef = useRef({ value: 0 })

  useEffect(() => {
    if (!elementRef.current) return

    gsap.to(countRef.current, {
      value: target,
      duration,
      snap: { value: 1 },
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.textContent = Math.floor(countRef.current.value)
        }
      }
    })
  }, [target, duration])

  return elementRef
}
