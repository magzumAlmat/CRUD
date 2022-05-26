const express=require('express')
const userRouter=require('./routes/user.router')
const postRouter=require('./routes/post.router')

// const res = require('express/lib/response')
const PORT=process.env.PORT || 4000




const app=express()
app.use(express.json())
app.use('/api',userRouter) 
app.use('/api',postRouter)
const cors = require('cors');
app.use('/api',cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("content-type", "application/json");
    res.header("cache-control", "no-cache");
    next();
});


// app.get('/',(req,res)=>{res.send('Hello POSTGRES + NODE JS!!!')})
app.listen(PORT,()=>console.log(`server started at port ${PORT}`))