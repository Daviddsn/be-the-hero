const connection = require('../database/connectios');
const generatorID = require('../utils/generatorID');

module.exports = {
    async create(req,res){
        const id = generatorID();
        const {name, email,whatsapp,city,uf} = req.body;

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }); 
    return res.json({id});
    },
    async list(req,res){
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    }
}