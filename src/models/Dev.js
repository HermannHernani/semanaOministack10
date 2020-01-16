const moongose =  require('mongoose');

const devSchema = new moongose.Schema({
    name: String,
    gituser: String,
    bio: String,
    avatar_url: String,
    techs: [String],
}); 

module.exports = moongose.model('Dev', devSchema);

