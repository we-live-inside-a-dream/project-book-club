const express = require('express')

const eventRoutes = require('./routes/eventRoutes')
const membersRoutes = require('./routes/memberRoutes')



const app = express()
const port = 5001

app.use('/api/events', eventRoutes)
app.use('/api/members', membersRoutes)

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})