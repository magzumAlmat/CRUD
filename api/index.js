const express=require('express')
const userRouter=require('./routes/user.router')
const postRouter=require('./routes/post.router')

// const res = require('express/lib/response')
const PORT=process.env.PORT || 4000




const app=express()
app.use(express.json())
app.use('/api',userRouter) 
app.use('/api',postRouter)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "192.168.10.98"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', function(req, res, next) {
    // Handle the get for this route
  });
  
  app.post('/', function(req, res, next) {
   // Handle the post for this route
  });

// app.get('/',(req,res)=>{res.send('Hello POSTGRES + NODE JS!!!')})
app.listen(PORT,()=>console.log(`server started at port ${PORT}`))