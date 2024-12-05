import express from 'express'

const router = express.Router()

// get /books?sortField=title&sortOrder=-1
router.get('/books', (req, res, next) => {
    const { sortField } = req.query
    const sortOrder = parseInt(req.query.sortOrder)
    if (sortField && sortOrder) {
        const sortedBooks = res.app.locals.books.sort((a, b) => {
            if (a[sortField] === b[sortField]) {
                return 0
            } else {
                if (a[sortField] > b[sortField]) {
                    return 1 * sortOrder
                } 
                return -1 * sortOrder
            }
        })
        res.status(200).json(sortedBooks)
    } else {
        res.status(200).json(res.app.locals.books)
    }
})

router.post('/books', (req, res, next) => {
    const book = req.body
    book.id = res.app.locals.currentId
    res.app.locals.books.push(book)
    res.status(201).json(book)
})

router.get('/books/:bid', (req, res, next) => {
    const bookIndex = res.app.locals.books.findIndex(e => e.id === parseInt(req.params.bid))
    if (bookIndex !== -1) {
        res.status(200).json(res.app.locals.books[bookIndex])
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

router.put('/books/:bid', (req, res, next) => {
    const bookIndex = res.app.locals.books.findIndex(e => e.id === parseInt(req.params.bid))
    if (bookIndex !== -1) {
        res.app.locals.books[bookIndex].title = req.body.title
        res.app.locals.books[bookIndex].content = req.body.content
        res.status(202).json(res.app.locals.books[bookIndex])
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

router.delete('/books/:bid', (req, res, next) => {
    const bookIndex = res.app.locals.books.findIndex(e => e.id === parseInt(req.params.bid))
    if (bookIndex !== -1) {
        res.app.locals.books.splice(bookIndex, 1)
        res.status(204).json({})
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

export default router