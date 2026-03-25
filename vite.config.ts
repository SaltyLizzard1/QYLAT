import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const heroImg = env.VITE_IMG_HERO ?? '/images/rice-fields.jpg'

  return {
    plugins: [
      react(),
      {
        name: 'html-replace-vite-img-hero',
        transformIndexHtml(html) {
          return html.split('%VITE_IMG_HERO%').join(heroImg)
        },
      },
    ],
  }
})
