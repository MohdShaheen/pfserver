// import projectSchema
const projects = require('../Models/projectSchema')

// add project

exports.addProjects = (req,res) =>{
    console.log('inside addProject request');
    const userId = req.payload
    console.log(userId);
 
    
    
    res.status(200).json('add project request recieved')
}