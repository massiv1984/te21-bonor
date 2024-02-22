const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index.njk', { title: 'Välkommen' })
})

router.get('/beans', function (req, res) {
  res.render('beans.njk', { title: 'Bönor' })
})

router.get('/beans/:id', function (req, res) {
  res.render('beans.njk', { title: 'Bönor' })
})

router.get('/reviews', function (req, res) {
  res.render('beans.njk', { title: 'Recensioner' })
})

router.get('/reviews/:id', function (req, res) {
  res.render('beans.njk', { title: 'Recensioner' })
})

module.exports = router

router.get('/newbean', function(req, res){
  res.render('newbean.njk', { title: 'ny böna' })
})

router.post('/newbean', async function (req, res) {
  console.log(req.body)
  res.json(req.body)
})