class AudioManager {
  static instance = null
  audioContext = null
  soundEffects = {}
  backgroundMusic = null
  masterVolume = 0.7
  initialized = false

  static getInstance() {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager()
    }
    return AudioManager.instance
  }

  initialize() {
    if (this.initialized) return
    
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      this.audioContext = new AudioContextClass()
      this.initialized = true
      this.loadSoundEffects()
    } catch (e) {
      console.log('Web Audio API not supported')
    }
  }

  loadSoundEffects() {
    // Sound effects would be loaded from assets
    // This is a placeholder for the audio loading system
    this.soundEffects = {
      systemBoot: { file: '/sounds/system-boot.mp3', duration: 2 },
      hologramActivate: { file: '/sounds/hologram-activate.mp3', duration: 1.5 },
      radarPulse: { file: '/sounds/radar-pulse.mp3', duration: 0.8 },
      targetLocked: { file: '/sounds/target-locked.mp3', duration: 1 },
      uiClick: { file: '/sounds/ui-click.mp3', duration: 0.3 },
      transition: { file: '/sounds/transition.mp3', duration: 1.2 }
    }
  }

  playSoundEffect(effectName, volume = this.masterVolume) {
    if (!this.initialized || !this.soundEffects[effectName]) return
    
    try {
      const audio = new Audio(this.soundEffects[effectName].file)
      audio.volume = volume
      audio.play().catch(e => console.log('Audio play failed:', e))
    } catch (e) {
      console.log('Sound effect play error:', e)
    }
  }

  setMasterVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume))
  }
}

export default AudioManager
