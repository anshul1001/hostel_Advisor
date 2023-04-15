import {db} from '../db.js';
export const addPost = (req,res)=>{
    const gmail =req.body.gmail;
    const propertyName =req.body.propertyName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const rent = req.body.rent;
    const propertyType =req.body.propertyType;
    const ownerName = req.body.ownerName;
    const date = req.body.date;
    const locality =req.body.locality;
    const image = req.body.image;
    db.query(
        "INSERT INTO PROPERTYDATA(gmail,propertyname ,ownername ,locality,address,rent,propertytype,phonenumber,dateofregistration , image) VALUES(?,?,?,?,?,?,?,?,?,?)",[gmail,propertyName,ownerName,locality,address,rent,propertyType,phoneNumber,date,image],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("value inserted");
                res.send("Values Inserted")
            }
        }
    )
}
export const getPosts = (req,res)=>{
    const q = req.query.locality?
    "SELECT * FROM PROPERTYDATA WHERE locality=?" : 'SELECT * FROM PROPERTYDATA';
    db.query(q,[req.query.locality],(err,data)=>{
                if(err){
                  return res.send(err);
                }
                else{
                   return res.status(200).json(data);
                }
            });
};

export const getPost = (req,res)=>{

}
export const deletePost = (req,res)=>{
    
}
export const updatePost = (req,res)=>{
    
}

