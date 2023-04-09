const express =require('express')
const app=express();
const mysql =require('mysql')
const cors = require('cors')
app.use(cors());
app.use(express.json());

 const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'password',
    database:'postproperty'
 });
  app.post("/create",(req,res)=>{
    const gmail =req.body.gmail;
    const propertyName =req.body.propertyName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const rent = req.body.rent;
    const propertyType =req.body.propertyType;
    const ownerName = req.body.ownerName;
    const date = req.body.date;
    const locality =req.body.locality;

    db.query(
        "INSERT INTO PROPERTYDATA(gmail,propertyname ,ownername ,locality,address,rent,propertytype,phonenumber,dateofregistration) VALUES(?,?,?,?,?,?,?,?,?)",[gmail,propertyName,ownerName,locality,address,rent,propertyType,phoneNumber,date],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send("Values Inserted")
            }
        }
    )

  });
  app.get('/properties' ,(req,res)=>{
    db.query('SELECT * FROM PROPERTYDATA',(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
  });

app.listen(3001,()=>{
    console.log("listening......");
});