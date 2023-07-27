import { tinaField } from "tinacms/dist/react"
import YouTubePLayer from "../YouTubePLayer"
import { PageBlocksVideo } from "../../../tina/__generated__/types"

type TVideo = {
  videoUrl: string
}

const Video = ({ data }: { data: PageBlocksVideo }) => {
  const videos = data?.videos

  return (
    <section id="videos">
      <div className="mx-auto px-5 py-24">
        <h2>Weddings</h2>
        <div className="flex max-w-full flex-wrap justify-around  gap-2">
          {videos.map((video: TVideo, key: number) => {
            return (
              <div key={key} data-tina-field={tinaField(video, "videoUrl")}>
                <YouTubePLayer videoUrl={video.videoUrl} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Video
