// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

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

//====================================

router.get('/reviews', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('reviews', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'reviews',
  })
  // ↑↑ сюди вводимо JSON дані
})

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

router.get('/coloring-eyelashes', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('coloring-eyelashes', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'coloring-eyelashes',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/spa-eyelashes', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('spa-eyelashes', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'spa-eyelashes',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/removal-eyelashes', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('removal-eyelashes', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'removal-eyelashes',
  })
  // ↑↑ сюди вводимо JSON дані
})
//==================================================

//router.post('/build-eyelashes', function (req, res) {})
//=======================================

//router.post('/eyelashes', function (req, res) {})

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

router.get('/base-brows', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('base-brows', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'base-brows',
  })
  // ↑↑ сюди вводимо JSON дані
})

router.get('/coloring-brows', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('coloring-brows', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'coloring-brows',
  })
  // ↑↑ сюди вводимо JSON дані
})

//router.post('/brows', function (req, res) {})

// Підключаємо роутер до бек-енду
module.exports = router
