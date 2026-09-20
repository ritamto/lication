import { Hono } from 'hono'

const app = new Hono()

app.get('/api/', (c) => c.json({ message: 'Hello World!' }))

app.get('/api/items/:id', (c) => {
  const id = Number(c.req.param('id'))
  const q = c.req.query('q')
  return c.json({ item_id: id, q })
})

export default app
