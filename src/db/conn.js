const mongoose=require("mongoose");

const database=()=>{
      mongoose.connect("mongodb+srv://ryesvanthaan:rest@cluster0.kcnpz1k.mongodb.net/Formsdetail?retryWrites=true&w=majority",{
         useNewUrlParser:true,
         useUnifiedTopology:true,
      }).then(()=>{
         console.log("Database is connected")
      }).catch(()=>{
        console.log("Database is not connected")
      })
}

module.exports=database