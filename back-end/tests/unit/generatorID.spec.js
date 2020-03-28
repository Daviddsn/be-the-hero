const generatorID = require('../../src/utils/generatorID');

describe('Generate Unique ID',()=>{
    const id = generatorID();
    it('Gerador do ID',()=>{
        expect(id).toHaveLength(8);
    })
})