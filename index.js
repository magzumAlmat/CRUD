const express=require('express')
const userRouter=require('./routes/user.router')
const postRouter=require('./routes/post.router')

// const res = require('express/lib/response')
const PORT=process.env.PORT || 8080

const app=express()
app.use(express.json())
app.use('/api',userRouter) 
app.use('/api',postRouter)

// app.get('/',(req,res)=>{res.send('Hello POSTGRES + NODE JS!!!')})
app.listen(PORT,()=>console.log(`server started at port ${PORT}`))