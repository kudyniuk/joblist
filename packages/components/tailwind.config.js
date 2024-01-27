import { theme } from "@kudyniuk/theme"
import { createGlobPatternsForDependencies } from "@nx/react/tailwind"
import { join } from "path"

const config = {
  content: [join(__dirname, "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    extend: theme,
  },
  plugins: [],
}

export default config
