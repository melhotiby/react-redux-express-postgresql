const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')
const errorHandler = require('./middleware/error')
const { API_VERSION, API_PREFIX } = require('./utils/version')

// Load env vars
dotenv.config()

const { NODE_ENV } = process.env

// Route files
const users = require('./routes/users')

const app = express()

// Body Parser
app.use(express.json())

// Dev logging middleware
if (NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Set Static Folder
app.use(express.static(path.join(__dirname, './public')))

// Mount routes
app.use(`${API_PREFIX}/${API_VERSION}/users`, users)

// Error Handler middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
