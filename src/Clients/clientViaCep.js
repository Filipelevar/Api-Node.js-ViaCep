const axios = require('axios')

async function apiViaCep(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    try {
        const config = {
            url: url,
            method: "GET",
        }
        const result = await axios(config)
        return result.data
    } catch (error) {
        return error.response.data
    }
}

module.exports = {
apiViaCep
}