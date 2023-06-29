exports.calculoIdade = async(dataNascimento) => {

    let diaAniversario = dataNascimento.split('/')[0]
    let mesAniversario = dataNascimento.split('/')[1]
    let anoAniversario = dataNascimento.split('/')[2]

    let diaAtual = new Date().getDate()
    let mesAtual = new Date().getMonth() +1
    let anoAtual = new Date().getFullYear()

    let idade = anoAtual - anoAniversario;
    if(mesAtual<mesAniversario || mesAtual == mesAniversario && diaAtual<diaAniversario){
        idade -- 

    }

    return idade

    }

     
   

