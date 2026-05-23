import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import gsap from 'gsap'

export const useCinematicCamera = () => {
  const cameraRef = useRef()
  const targetPosition = useRef({ x: 0, y: 0, z: 0 })

  const smoothMoveTo = (x, y, z, duration = 2) => {
    gsap.to(targetPosition.current, {
      x,
      y,
      z,
      duration,
      ease: 'power3.inOut'
    })
  }

  const cinemaZoom = (targetPos, zoom = 0.1, duration = 3) => {
    gsap.to(cameraRef.current?.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        cameraRef.current?.lookAt(targetPos.x, targetPos.y, 0)
      }
    })
  }

  useFrame(() => {
    if (!cameraRef.current) return
    
    cameraRef.current.position.lerp(targetPosition.current, 0.05)
  })

  return { cameraRef, smoothMoveTo, cinemaZoom }
}
