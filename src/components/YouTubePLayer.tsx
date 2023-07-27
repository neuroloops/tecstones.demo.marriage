import { tinaField } from "tinacms/dist/react"

const YouTubePLayer = ({
  videoUrl = "https://youtu.be/BSMcK2cqwio",
}: {
  videoUrl?: string
}) => {
  function getYouTubeVideoId(url: string) {
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

  const videoId = getYouTubeVideoId(videoUrl)
  const playerSize = 1.4
  const url = `https://youtube.com/embed/${videoId}?playlist=${videoId}&loop=1`
  return (
    <iframe
      width={560 / playerSize}
      height={315 / playerSize}
      src={url}
      className="  rounded-xl"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
    />
  )
}

export default YouTubePLayer
