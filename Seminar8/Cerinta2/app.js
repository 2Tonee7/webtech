const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000


const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)


let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    .post((req, res) => {
        const { id, name, genre, author } = req.body;

        if (typeof id !== 'number' || books.some(b => b.id === id)) {
            return res.status(400).json({ error: "Invalid or duplicate 'id'" });
        }
        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: "'name' required, must be a string" });
        }
        if (!genre || typeof genre !== 'string') {
            return res.status(400).json({ error: "'genre' required, must be a string" });
        }
        if (!author || typeof author !== 'string') {
            return res.status(400).json({ error: "'author' required, must be a string" });
        }

        const newBook = new Book(id, name, genre, author);
        books.push(newBook);

        console.log('Books updated:', books);
        return res.status(201).json(newBook); 
    })


app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})