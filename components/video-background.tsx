"use client"

import { useEffect, useRef, useState } from "react"

const videoFiles = [
  "/broll/4877896-uhd_4096_2160_25fps.mp4",
  "/broll/DJI_20251107140856_0020_D.mov",
  "/broll/YTDown.com_YouTube_Travel-4K-Cinematic-B-Roll-Ichiban-Resta_Media_InWQ1nqRWTI_001_1080p.MOV",
  "/broll/YTDown.com_YouTube_Travel-4K-Cinematic-B-Roll-Ichiban-Resta_Media_InWQ1nqRWTI_001_1080p 2.MOV",
  "/broll/YTDown.com_YouTube_Travel-4K-Cinematic-B-Roll-Ichiban-Resta_Media_InWQ1nqRWTI_001_1080p 3.MOV",
]

export function VideoBackground() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(0) // 0 for video1, 1 for video2
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current
    if (!video1 || !video2) return

    const currentVideo = activeVideo === 0 ? video1 : video2
    const nextVideo = activeVideo === 0 ? video2 : video1
    const nextVideoIndex = (currentVideoIndex + 1) % videoFiles.length

    // Preload next video in the inactive buffer
    nextVideo.src = videoFiles[nextVideoIndex]
    nextVideo.load()
    
    // Set up timeout to switch after 5 seconds
    const handlePlaying = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        // Switch to the preloaded video
        currentVideo.pause()
        currentVideo.currentTime = 0
        
        // Show next video and hide current
        nextVideo.play().catch(() => {
          // Ignore autoplay errors
        })
        
        // Update active video and index
        setActiveVideo(activeVideo === 0 ? 1 : 0)
        setCurrentVideoIndex(nextVideoIndex)
      }, 5000) // 5 seconds
    }

    // If current video is already playing, set up timeout immediately
    if (currentVideo.readyState >= 2 && !currentVideo.paused) {
      handlePlaying()
    } else {
      // Wait for video to start playing
      currentVideo.addEventListener("playing", handlePlaying, { once: true })
    }

    // Start playing current video if not already playing
    if (currentVideo.paused) {
      currentVideo.play().catch(() => {
        // Ignore autoplay errors
      })
    }

    return () => {
      // Cleanup is handled by { once: true }, but clear timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentVideoIndex, activeVideo])

  // Initialize first video
  useEffect(() => {
    const video1 = video1Ref.current
    if (!video1) return

    video1.src = videoFiles[0]
    video1.load()
    video1.play().catch(() => {
      // Ignore autoplay errors
    })
  }, [])

  return (
    <>
      <video
        ref={video1Ref}
        muted
        loop={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          pointerEvents: "none",
          opacity: activeVideo === 0 ? 1 : 0
        }}
      />
      <video
        ref={video2Ref}
        muted
        loop={false}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          pointerEvents: "none",
          opacity: activeVideo === 1 ? 1 : 0
        }}
      />
    </>
  )
}

