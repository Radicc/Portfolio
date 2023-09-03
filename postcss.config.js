import "tailwindcss/nesting/index.js"
import "tailwindcss"
import "autoprefixer"

export default {
  plugins: {
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
}
