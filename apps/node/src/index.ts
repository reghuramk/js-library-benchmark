import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('heloo world')
})

app.listen(3000, () => console.log('Listening on 3000'));

