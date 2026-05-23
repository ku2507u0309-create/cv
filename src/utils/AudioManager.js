class AudioManager {
  constructor() {
    this.audioContext = null
    this.soundEffects = {}
    this.isInitialized = false
  }

  static instance = null

  static getInstance() {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  initialize() {
    if (this.isInitialized) return

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContext()
      this.isInitialized = true
    } catch (e) {
      console.warn('Audio context not available')
    }
  }

  playSoundEffect(name) {
    if (!this.audioContext) return

    const now = this.audioContext.currentTime
    const oscillator = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(this.audioContext.destination)

    switch (name) {
      case 'systemBoot':
        oscillator.frequency.setValueAtTime(400, now)
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.5)
        gain.gain.setValueAtTime(0.3, now)
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5)
        oscillator.start(now)
        oscillator.stop(now + 0.5)
        break

      case 'hologramActivate':
        oscillator.type = 'sine'
        oscillator.frequency.setValueAtTime(600, now)
        oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.3)
        gain.gain.setValueAtTime(0.2, now)
        gain.gain.exponentialRampToValueAtTime(0, now + 0.3)
        oscillator.start(now)
        oscillator.stop(now + 0.3)
        break

      default:
        break
    }
  }
}

export default AudioManager
