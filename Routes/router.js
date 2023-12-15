// path to resolve the client request

// 1) import express
const express = require('express')

// import controller
const userController = require('../controllers/userController')

// import project Controller
const projectController = require('../controllers/projectController')

// import jwt middleware
const jwtMiddleware = require('../Middleware/jwtMiddleware')

// 2) create an object for the class Router in express
const router =  new express.Router()

// 3) path for resolving the request    
    // syntax - router.httprequest('path to reslove request ',()=>{how to resolve the request(inside controller)})
    // a) Register
        router.post('/users/register',userController.register)

    // b) login
        router.post('/users/login',userController.login)

    // c) add project
        router.post('/project/add',jwtMiddleware,projectController.addProjects)

// 4) export router
module.exports = router