const fs=require("fs")
const express = require("express");
const app=express();
const port=5000;
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
         res.send("estamos en la raiz")
})
/*
app.get("/formulario",(req,res)=>{
        res.send("formulario enviado..")
        console.log(req.query);
        
})
*/
app.post("/formulario",(req,res)=>{
    

     const {nombre,apellido}=req.body;

     if(!nombre || !apellido) return res.redirect("/error.html")


        fs.writeFile(`${nombre}.pdf`,apellido,(error)=>{
            if(error) return res.send("fallo al crear el archivo")
                res.send("se creo el archivo")
        })
  
})

app.get("/mision",(req,res)=>{
        res.send("estamos en mision")
})

app.listen(port,()=>{
    console.log("servidor funcionando");
    
})