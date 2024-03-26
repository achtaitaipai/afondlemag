import { defineConfig } from "tinacms";
import { fields } from "./tinaFields.ts";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "hero",
        label: "Introduction",
        path: "src/content/hero",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [fields.title, fields.image, fields.body, fields.url],
      },
      {
        name: "samples",
        label: "Un magazine pour",
        path: "src/content/samples",
        fields: [fields.title, fields.priority, fields.image, fields.text],
      },
      {
        name: "testimonials",
        label: "Ils parlent de nous",
        path: "src/content/testimonials",
        fields: [fields.title, fields.body, fields.priority],
      },
      {
        name: "principles",
        label: "Nos principes",
        path: "src/content/principles",
        fields: [fields.body, fields.priority],
      },
      {
        name: "team",
        label: "L'équipe",
        path: "src/content/team",
        fields: [fields.title, fields.image, fields.body, fields.priority],
      },
    ],
  },
});