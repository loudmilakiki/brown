// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

class Product {
  static #list = []

  constructor(name, price, description) {
    this.name = name
    this.price = price
    this.description = description
    this.createDate = new Date().toISOString()
    this.id = Math.floor(Math.random() * 100000)
  }

  static getList = () => this.#list

  static add = (product) => this.#list.push(product)

  static getByld = (id) =>
    this.#list.find((product) => product.id === id)

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (product) => product.id === id,
    )

    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  static updateById = (id, data) => {
    const product = this.getById(id)
    if (product) {
      this.update(product, data)

      return true
    } else {
      return false
    }
  }

  static update = (
    product,
    { name, price, description },
  ) => {
    if (product) {
      product.name = name
      product.price = price
      product.description = description
    }
  }

  static deleteById = (id) => {
    const index = this.#list.findIndex(
      (product) => product.id === Number(id),
    )

    if (index !== -1) {
      this.#list.splice(index, 1)
      return true
    } else {
      return false
    }
  }
}
// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  const list = Product.getList()
  res.render('product-create', {
    style: 'product-create',

    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
})

// ================================================================

//============================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.post('/product-create', function (req, res) {
  // res.render генерує нам HTML сторінку

  const { name, price, description } = req.body

  const product = new Product(name, price, description)

  Product.add(product)

  console.log(Product.getByld())

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('alert', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'alert',
    info: 'Товар успішно додано',
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

//============================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-list', function (req, res) {
  // res.render генерує нам HTML сторінку

  const list = Product.getList()

  console.log(list)
  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('product-list', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'product-list',

    data: {
      products: {
        list,
        isEmpty: list.length === 0,
      },
    },
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

//============================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-edit', function (req, res) {
  // res.render генерує нам HTML сторінку

  const { id } = req.query

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('product-edit', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'product-edit',
  })

  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.post('/product-edit', function (req, res) {
  // res.render генерує нам HTML сторінку

  const { id, name, price, description } = req.body

  const product = Product.updateById(Number(id), {
    name,
    price,
    description,
  })

  if (product) {
    // Якщо оновлення вдалося, відображаємо повідомлення про успіх
    res.render('alert', {
      style: 'alert',
      title: 'Успішне виконання дії',
      info: 'Товар успішно оновлено',
    })
  } else {
    // Якщо оновлення не вдалося (наприклад, товару з таким id не існує),
    // відображаємо повідомлення про помилку
    res.render('alert', {
      style: 'alert',
      title: 'Помилка',
      info: 'Не вдалося оновити товар',
    })
  }
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/product-delete', function (req, res) {
  // res.render генерує нам HTML сторінку
  const { id } = req.query

  const isDeleted = Product.deleteById(Number(id))

  if (isDeleted) {
    // Якщо видалення успішне, перенаправте на сторінку зі списком товарів
    res.redirect('/product-list')
  } else {
    // Якщо видалення не вдалося (наприклад, товару з таким id не існує),
    // відображаємо повідомлення про помилку
    res.render('alert', {
      style: 'alert',
      title: 'Помилка',
      info: 'Не вдалося видалити товар',
    })
  }
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
