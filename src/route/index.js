// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

//=================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'index',

    // component: [header],
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

//=================================================================
// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/eyelashes', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('eyelashes', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'eyelashes',
  })
  // ↑↑ сюди вводимо JSON дані
})

//============================================

router.get('/build-eyelashes', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('build-eyelashes', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'build-eyelashes',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/coloring', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('coloring', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'coloring',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/spa', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('spa', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'spa',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/removal', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('removal', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'removal',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.post('/build-eyelashes', function (req, res) {})
//=======================================

router.post('/eyelashes', function (req, res) {})

// ================================================================

router.get('/brows', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('brows', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'brows',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.post('/brows', function (req, res) {})

// Підключаємо роутер до бек-енду
module.exports = router
