const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')

app.use(cors())

const users = [
    { id: 1, name: 'John' ,email :'john@gmail.com' , age: 20 },
    { id: 2, name: 'Sara' ,email :'sara@gmail.com' , age: 21 },
    { id: 3, name: 'Jane' ,email :'jane@gmail.com' , age: 22 },
    { id: 4, name: 'Bob' ,email :'bob@gmail.com' , age: 23 },
    { id: 5, name: 'Mary' ,email :'mary@outlook.com' , age: 24 },
    { id: 6, name: 'Peter' ,email :'peter@outlook.com' , age: 25 },
    { id: 7, name: 'Alice' ,email :'alice@outlook.com' , age: 26 },
    { id: 8, name: 'Sam' ,email :'sam@outlook.com' , age: 27 },
    { id: 9, name: 'Max' ,email :'max@yahoo.com' , age: 28 },
    { id: 10, name: 'Mike' ,email :'mike@yahoo.com' , age: 29 },
    { id: 11, name: 'Tina' ,email :'tina@hotmail.com' , age: 30 },
]



app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/' ,(req, res) => {
    res.send("Welcome to the users API ")
})

app.get('/header' ,(req, res) => {
    res.send(" WeAreDevelopers ")})

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })