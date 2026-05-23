import { create } from 'zustand'

const useSceneStore = create((set) => ({
  currentScene: 'main',
  setCurrentScene: (scene) => set({ currentScene: scene }),

  userProfile: {
    name: 'Priya Patel',
    title: 'Computer Science Engineer | AI/ML Specialist',
    location: 'Gujarat, India',
    bio: 'Building the future with code and innovation',
    image: '/profile.jpg'
  },

  qualitySettings: {
    particleCount: 2000,
    shadowQuality: 'high',
    postProcessing: true,
    volumetricLighting: true
  }
}))

export { useSceneStore }
