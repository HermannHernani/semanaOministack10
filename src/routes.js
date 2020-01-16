const {Router} = require ('express'); 
const axios = require ('axios');
const routes = Router();

routes.post('/devs', (request, response) =>{
    const {gituser} = request.body;
    const response = axios.get(`https://api.github.com/users/${gituser}`);
    return response.json({message: 'Ola World'})
  }); 
  
module.exports = routes;