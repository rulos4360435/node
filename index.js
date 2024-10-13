const express= require("express");
const app=express();
const port=5000;
app.use(express.static(__dirname +  "/public"))
app.get("/",(req,res)=>{
    res.send("solicitando ruta")
})

app.listen(port,()=>console.log("servidor funcionando")
)