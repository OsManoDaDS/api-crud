import express from "express";

const app = express();
app.use(express.json());

const users = [];   

app.post('/users', (req,res) => {
    console.log(res);

    res.send('Ok post.')
})

app.get('/users', (req,res) => {
    res.send('Ok, deu bom');
});

app.listen(8081);