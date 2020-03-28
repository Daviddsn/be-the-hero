const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connectios');

describe('ONG',()=>{
   beforeEach(async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
   });
   afterAll(async ()=>{
     await connection.destroy();
   })
    it('Criar ONG',async ()=>{
        const response = await request(app).post('/ongs').send({
            name:"Eisten",
            email:"contator@email.com",
            whatsapp:"9 9999 9999",
            city:"Sao Paulo",
            uf:"SP"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})