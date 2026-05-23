import { create } from 'zustand'

const useSceneStore = create((set) => ({
  currentScene: 'activation',
  isTransitioning: false,
  audioEnabled: true,
  qualitySettings: {
    particleCount: 1000,
    shadowQuality: 'high',
    postProcessing: true,
    volumetricLighting: true
  },
  userProfile: {
    name: 'Priya Patel',
    title: 'Computer Science Engineer',
    location: 'Gujarat, India',
    bio: 'Innovator. Builder. Visionary.',
    image: null
  },
  setScene: (scene) => set({ currentScene: scene }),
  setTransitioning: (isTransitioning) => set({ isTransitioning }),
  setAudioEnabled: (audioEnabled) => set({ audioEnabled }),
  setUserProfile: (profile) => set({ userProfile: { ...useSceneStore.getState().userProfile, ...profile } })
}))

export { useSceneStore }
