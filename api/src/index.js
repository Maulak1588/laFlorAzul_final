require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Stories = require('./model/Stories');

app.use(express.json());

app.get('/clasicos', (req, res) => {
    Stories.find()
                .then((result) => {
                    res.send(result)
                })
                .catch(err => res.status(404).send(err));
});

app.post('/clasicos', (req, res) => {
    const cuento = new Stories(req.body)
    cuento.save()
            .then(() => {
                res.status(201).send(cuento);
            })
            .catch((err) => {
                res.status(400).send(err);
            });
})

app.listen(3001, () => {
    console.log('Servidor funcionando en el puerto 3001')
});
