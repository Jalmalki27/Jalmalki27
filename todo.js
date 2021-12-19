const {Schema,model}=require('mongoose');
const todoSchema=new Schema({
    title:String,
    icCompleted:Boolean
})

const Todo =model('Todo',todoSchema)
module.exports= Todo