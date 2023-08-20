import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // dirname wird mit den 3 oberen Zeilen "erstellt"

const app = express();

app.get("/", function(req,res){
    res.render("index.ejs");
    // res.sendFile(__dirname+ "/views/index.ejs")
});

/* app.post("/", function(req,res){
   res.render("/views/index.ejs");
}) */

app.listen(3000,function(req,res){
    console.log("Server running on port 3000.");
});

