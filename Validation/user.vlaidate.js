const Joi = require("joi");
const errorList = [];

const schema =
{

    signup :Joi.object({

        first_name:Joi.string().min(3).max(10).required(),
        last_name:Joi.string().min(3).max(10).required(),
        email:Joi.string().email().required(),
        age:Joi.number().min(16).max(70).required(),
        password:Joi.string().alphanum(3).required(),
       
       }) ,
    signin :Joi.object({

       
        email:Joi.string().email().required(),
        password:Joi.string().alphanum(3).required(),
       
       }) ,
}



module.exports.validateSignup = async(req,res,next)=>
{
   let {error} = schema.signup.validate(req.body , {abortEarly:false})
   if(error)
   {
    error.details.map((error)=>errorList.push(error.message));
    res.json({message: "errorList" , errorList})
   }
   else
   {
    next();
   }
}
module.exports.validateSignin = async(req,res,next)=>
{
   let {error} = schema.signin.validate(req.body , {abortEarly:false})
   if(error)
   {
    error.details.map((error)=>errorList.push(error.message));
    res.json({message: "errorList" , errorList})
   }
   else
   {
    next();
   }
}