const returnAdress = require('../Clients/clientViaCep')
const returnIdade = require('../Utils/calculaIdade')

exports.validateUser = async(req,res) => {
let pessoa = req.body
try {
    let adress = await returnAdress.apiViaCep(pessoa.cep)
    pessoa.adress = adress
    const idade = await returnIdade.calculoIdade(pessoa.dataNascimento)
    pessoa.idade = idade
    res.status(200).send(pessoa)
} catch (error) {
    return res.status(400).json(error.message)
    
}

};
