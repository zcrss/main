const express = require("express")

const app = express()

app.get ("/",(req,res)=>{
    // res.write("test")
    // res.end()
    res.send(
        {
            name: "ale",
            age:100
        }
    )
})
const func1 = (req,res,next)=>{
    // 假设验证token和cookie是否过期
    console.log("验证token")
    const isValid = true

    if (isValid) {
        next()
    }else{
        res.send("error")
    }
    
}


const func2 = (req,res)=>{
    res.send({list:[1,2,3]})
}
//应用级中间件

app.use(func1)

app.get("/home",[func1,func2])

app.get ("/login",(req,res)=>{
    res.write("login")
    res.end()
})

app.get ("/exit",(req,res)=>{
    res.send("exit")
})

app.get ("/html",(req,res)=>{
    res.send(`
        <html>
            <h1>test</h1>
        </html>
    `)
})

app.listen(3000,()=>{
    console.log("server启动")

})