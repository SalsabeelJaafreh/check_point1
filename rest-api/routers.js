var Router = require('express').Router();
var Usercontroller=require('./Usercontroller');


Router.route('/users').get(Usercontroller.alluser)
Router.route('/users').post(Usercontroller.createuser)

Router.route('users/:id').get(Usercontroller.retrieveuser)

Router.route('users/:id').put(Usercontroller.updateuser)
Router.route('users/:id').delete(Usercontroller.deleteuser)



module.exports = pokemonRouter;
