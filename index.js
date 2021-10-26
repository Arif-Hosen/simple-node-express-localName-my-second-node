const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow!!! I am very excited to learn node and express with nodemon. autometic restart.');
});

const users = [
    { id: 0, name: 'Sabana', email: "sabana@gmail.com", phone: "01777" },
    { id: 1, name: 'Sabnur', email: "sabnur@gmail.com", phone: "01778" },
    { id: 2, name: 'Srabonti', email: "sranbonti@gmail.com", phone: "01779" },
    { id: 3, name: 'Susmita', email: "susmita@gmail.com", phone: "01776" },
    { id: 4, name: 'Sagorika', email: "saagorika@gmail.com", phone: "01775" },
    { id: 5, name: 'Soniya', email: "soniya@gmail.com", phone: "01771" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];

    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli.')
});

app.listen(port, () => {
    console.log('Listening to port', port);
});