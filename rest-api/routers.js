var Router = require('express').Router();
var Usercontroller=require('./Usercontroller');


Router.route('api/users').get(Usercontroller.alluser)
Router.route('api/users').post(Usercontroller.createuser)

Router.route('api/users/:id').get(Usercontroller.retrieveuser)

Router.route('api/users/:id').put(Usercontroller.updateuser)
Router.route('api/users/:id').delete(Usercontroller.deleteuser)



module.exports = pokemonRouter;
