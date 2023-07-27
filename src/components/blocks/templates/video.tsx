import { Template } from "tinacms"

const videoTemplate: Template = {
  name: "Video",
  label: "video",
  fields: [
    {
      type: "object",
      label: "Videos",
      name: "videos",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
        defaultItem: {
          videoUrl: "https://youtu.be/BSMcK2cqwio",
        },
      },
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Video URL",
          name: "videoUrl",
        },
      ],
    },
  ],
}

export default videoTemplate
