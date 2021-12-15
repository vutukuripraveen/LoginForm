const express  = require('express');
const app = express()
const path = require("path")
const {open} =require("sqlite")
const sqlite = require("sqlite3")
const dbpath = path.join(__dirname,"goodreads.db");
let db = null;
const initializeDBAndSever = async() =>{
    try {
        db =await open({
            fileName:dbpath,
            driver:sqlite3.Database,
        })
    app.listen(3000,() =>{
        console.log("sever Running")
    });
    } catch(e){
        console.log(`DB Error ${e.message}`);
        process.exit(1);
    }
};

app.get("/books",async(request,response)=>{
    const getBookQuery =
    `
    SELECT
    *
    FROM
    books
    OREDER By
    book_id ;`
    const bookArray = await db.all(getBookQuery)
    response.send(bookArray)
});