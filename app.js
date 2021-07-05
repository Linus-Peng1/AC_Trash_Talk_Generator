// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const targets = require('./targets.json')
const generateTrashTalk = require('./generate_trashTalk')
const app = express()
const port = 3000
let targetId

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayouts: 'main',
  helpers: {
    isSelected: function (id) {
      if (id === targetId) return 'checked'
    }
  }
}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('static'))

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', { targets: targets })
})

app.post('/', (req, res) => {
  targetId = Number(req.body.target)
  const trashTalk = generateTrashTalk(targetId)
  res.render('index', { targets: targets, trashTalk: trashTalk, targetId: targetId })
})


// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on https://localhost:${port}`)
})