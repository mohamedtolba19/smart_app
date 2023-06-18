const userModel = require("../Models/user.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
module.exports.signup = async(req,res)=>
{
    const {first_name, last_name , email , age , password} = req.body ;
   const user = await userModel.findOne({email});
   if(user)
   {
    res.json({message:"email is already registered"})
   }
   else
   {

    bcrypt.hash(password, 4, async (err, hash)=> {
        if(err)
        {
           
            res.json({message:err})
        }
        else
        {
            await userModel.insertMany({first_name, last_name , email , age , password:hash})
            res.json({message:"success"});
        }
    });
 

   }
 

}
module.exports.signin = async(req,res)=>
{
    const {email , password} =req.body ;
    user =  await userModel.findOne({email});
    if(user)
    { 
        const match = await bcrypt.compare(password, user.password);
        if(match)
        {
            const token = jwt.sign({ first_name:user.first_name , last_name:user.last_name , email:user.email , age : user.age , password : user.password}, 'movie');
            res.json({message:"success" , token})
        }
        else
        {
            res.json({message:"incorrect password"})
        }

    }
    else
    {
        res.json({message:"email is not existed"})
    }

}