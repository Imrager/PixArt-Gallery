const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/router')

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/', routes)



const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})