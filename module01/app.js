import express from 'express'

const router = express.Router()
const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

router.get('/', (req, res) => {
  res.sendFile('index.html', {root:'public'})
})

app.use(router)

app.listen(port, 
  () => console.log(`Server listening using port no: ${port}`)
);