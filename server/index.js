const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

const db = mysql.createConnection(
    {
        user : "root",
        host : "localhost",
        password : "",
        database : "loginsystem"
    }
);

app.post('/register', (req, res)=>{

    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users(username , password) VALUES (?,?)", [username , password],(err , result) => {
        if(err)
        {
            res.send({err : err});
        }
        if(result)
        {
            res.send(result)
        }
        else
        {
            res.send({message : "Something went wrong !"})
        }
    });
})

app.post('/login' , (req , res) => {
    const password = req.body.password;
    const username = req.body.username;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username , password], (err , result) => {
        if(err)
        {
            console.log("An Error Have Occured At The login : "+err);
            res.send({err : err})
        }
        if(result.length > 0)
        {
            res.send(result);
        }else{
            res.send({message : "Error : Wrong Username&|password Combinaision"})
        }
    }) 

})

app.listen(3001, ()=> {
    console.log("Running Server...");
});