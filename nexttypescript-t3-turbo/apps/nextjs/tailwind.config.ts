import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  // @ts-ignore
  presets: [require("@acme/tailwind-config")],
} satisfies Config;
