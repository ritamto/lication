import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import app from './app.js'

// Serves the built frontend (frontend/dist) alongside the /api/* routes.
// In dev, "npm run dev" keeps this folder rebuilt via `vite build --watch`.
app.use('/*', serveStatic({ root: '../frontend/dist' }))

const port = Number(process.env.PORT) || 3000
serve({ fetch: app.fetch, port })
console.log(`Running on http://localhost:${port}`)
