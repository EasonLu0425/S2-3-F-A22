const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/:page', (req,res) => {
  const page = req.params.page
  // console.log(page)
  res.render(`${page}`)
})


app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`)
})