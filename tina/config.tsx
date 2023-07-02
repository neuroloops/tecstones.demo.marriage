import { heroBlockSchema } from "@/components/blocks/Hero"
import { defineConfig } from "tinacms"

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main"

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "media",
      publicFolder: "public/upload",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          // {
          //   type: "object",
          //   list: true,
          //   name: "blocks",
          //   label: "Sections",
          //   ui: {
          //     visualSelector: true,
          //   },
          //   templates: [heroBlockSchema],
          // },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
})
