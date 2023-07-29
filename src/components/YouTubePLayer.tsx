import { useState } from "react"

const YouTubePLayer = ({ videoUrl }: { videoUrl?: string }) => {
  const [playerSize, setPlayerSize] = useState(1.4)

  const getYouTubeVideoId = (url: string) => {
    // Regular expression to extract the video ID from the URL
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/
    const match = url.match(regex)

    if (match && match[1]) {
      return match[1]
    } else {
      // If the URL is not in the expected format, return null
      return null
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.screen.width <= 450) {
        setPlayerSize(2.4)
      } else {
        setPlayerSize(1.4)
      }
    })
  }

  const videoId = getYouTubeVideoId(videoUrl)

  const url = `https://youtube.com/embed/${videoId}?&autoplay=1&playlist=${videoId}&loop=1`

  return (
    <iframe
      width={560 / playerSize}
      height={315 / playerSize}
      src={url}
      className="  rounded-xl"
      title="YouTube video player"
      allow="autoplay"
    />
  )
}

export default YouTubePLayer
