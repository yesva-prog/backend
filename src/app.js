const express=require("express");
const app=express();
const path=require("path");
const database=require("./db/conn");
const hbs=require("hbs");
const registers=require("./model/register");

database();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const staticpath=path.join(__dirname,'../public');
const templatepath=path.join(__dirname,'../views');
app.use(express.static(staticpath));
app.set('view engine','hbs');
app.set("views",templatepath);
hbs.registerPartials(templatepath);


app.get("/",(req,res)=>{
    res.render("index.hbs")
})

app.get("/register",(req,res)=>{
    res.render("register.hbs");
})

app.get("/thank",(req,res)=>{
    res.render("thank.hbs")
})

app.post("/register",async(req,res)=>{
    try{
        const registermembers= new registers({
             firstname:req.body.firstname,
             lastname:req.body.lastname,
             email:req.body.email,
             phone:req.body.phone,
             password:req.body.password
        })

        const registered=await registermembers.save();
        res.status(200).send("thank")

    }catch(error){
        res.status(400).send(error)
    }
})

app.listen(8000,'127.0.0.1',()=>{
    console.log("Server listening to the port 8000")
})