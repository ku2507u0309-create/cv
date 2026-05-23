export class PerformanceMonitor {
  constructor() {
    this.fps = 0
    this.frameCount = 0
    this.lastTime = Date.now()
    this.metrics = {}
  }

  update() {
    this.frameCount++
    const currentTime = Date.now()
    const elapsed = currentTime - this.lastTime

    if (elapsed >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / elapsed)
      this.frameCount = 0
      this.lastTime = currentTime
    }

    return this.fps
  }

  recordMetric(name, duration) {
    if (!this.metrics[name]) {
      this.metrics[name] = []
    }
    this.metrics[name].push(duration)
  }

  getAverageMetric(name) {
    const values = this.metrics[name]
    if (!values || values.length === 0) return 0
    return values.reduce((a, b) => a + b, 0) / values.length
  }

  log() {
    console.log('=== Performance Metrics ===')
    console.log(`FPS: ${this.fps}`)
    Object.entries(this.metrics).forEach(([name, values]) => {
      console.log(`${name}: ${this.getAverageMetric(name).toFixed(2)}ms avg`)
    })
  }
}
