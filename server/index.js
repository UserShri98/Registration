const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://sjc3098:frGiK38fXQeF6ZPl@cluster0.0vdreoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.listen(3001,()=>{
   console.log("server is running")

})

