const {Client} = require("pg")
const express = require ("express")
const app = express();
app.use(express.json());

const client = new Client({
    user : "ogywxwwttgozcf",
    password : "ae48f850eaa072443dbba5348ae7a4235435ac14d4f8316baed5356848fc254d",
    host : "ec2-34-230-149-169.compute-1.amazonaws.com",
    port : 5432,
    Database: "d9004aqk6iq4t7"
})

client.connect()
    .then(() => console.log("Connected successfuly"))
    .catch(e => console.log(e))
    .finally(() => client.end())

/*
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});
express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/