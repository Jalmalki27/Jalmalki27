 const express=require('express')
 const app=express()
const db=require('./db')
const Todo=require('./todo')
//console.log(Todo)
app.use(express.json())
 app.get('/',(req,res)=>{
     res.json('GET /IS WORKING')

 })
 app.get('/tasks',(req,res)=>{
    // res.json('GET /IS WORKING')
    Todo.find({},(err,data)=>{
        if(err){
            console.log("ERROR:",err);
        }else{
            res.json(data);
        }
    })
 })
 app.post("/tasks",(req,res)=>{
     console.log('25:',req.err)
     Todo.create(req.body,(err,newTask)=>{
         if(err){
             console.log("ERROR: ",err);
  }else{
      res.status(201).json(newTask);

  }
     });
 });

 app.listen(5000,()=>{
     console.log('SERVER ID WORKING ...')
 })