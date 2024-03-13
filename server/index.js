import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();

const PORT = process.env.PORT || 3000 ;

const app = express();

app.get('/',(req,res)=>{
    res.send("hii");
})

app.listen(PORT,(err)=>{
    if(err){
        console.log('server crashed!');
    }else{
        console.log(`server is started at port ${PORT}`)
    }
});
