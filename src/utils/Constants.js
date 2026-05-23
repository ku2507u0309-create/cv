export const easing = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  sharp: 'cubic-bezier(0.4, 0, 1, 1)'
}

export const animationTimings = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  cinematic: 2,
  epic: 3
}

export const colors = {
  primary: '#00ff88',
  secondary: '#00ffff',
  tertiary: '#0088ff',
  accent: '#ff00ff',
  orange: '#ffaa00',
  dark: '#0a0e27',
  darker: '#050810'
}

export const shadows = {
  glow: (color = '#00ff88') => `0 0 20px ${color}`,
  strongGlow: (color = '#00ff88') => `0 0 40px ${color}, inset 0 0 20px ${color}`,
  neon: (color = '#00ff88') => `0 0 10px ${color}, 0 0 20px ${color}`
}

export const transitions = {
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  bouncy: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  cinematic: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}
