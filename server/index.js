const express = require('express')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const app = express()

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like main.js and main.css
  app.use(express.static('client/build'))

  // Express will serve up the index.html
  // if the route is not recognized
  const path = require('path')

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
