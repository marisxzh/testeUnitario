// teste.js aqui vamos colocar o código fonte

// function inteiro(inteiro) {
//     return inteiro; // essa é a solução mais simples para o erro
// }

//fizz buzz
// function jogo(numero) {
//     if ((numero %3 == 0) && (numero %5 == 0)) {
//         return "Fizz Buzz"
//     }
//     if (numero %3 == 0) {
//         return "Fizz"
//     }
//     if (numero %5 == 0) {
//         return "Buzz"
//     }
//     return numero;
// }
// % => resto de uma divisão

// const aluno = (nota, media) => {
//     let resultado;
//     let desempenho = 3;
//     if(desempenho >= 7) {
//         resultado = "Aprovado"
//     } else {
//         resultado = "Reprovado"
//     }
//     return resultado;
// }

// class Pessoa {
//     constructor(_Nome, _SobreNome, _Idade){
//         let nome = _Nome;
//         let sobrenome = _SobreNome;
//         let idade = _Idade;

//         this.nome = () => {
//             return nome
//         }
//         this.nome_completo = () => {
//             return nome + ' ' + sobrenome
//         }
//         this.nome_tudo = () => {
//             return nome + ' ' +sobrenome + ' tem idade de ' + idade;
//         }
//     }
// }


function multiplicacao(numero1, numero2, numero3) {
    let resultado = numero1 * numero2 * numero3;

    return resultado;
};


function divisao(numero1, numero2) {
    let resultado;
    
    if (numero2 != 0){
        resultado = numero1/numero2;
    } 
    else {
        resultado = "Não é possível dividir por 0";
    }
    return resultado;
};


function celsiusFahrenheit(celsius) {
    let resultado = celsius * 1.8 + 32;

    return resultado;
};

function fahrenheitCelsius(fahrenheit) {
    let resultado = (fahrenheit-32)/1.8;

    return resultado;
};

function media(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3)/3;

    return media;
};

function contarCaracter (palavra){
     let resultado = palavra.length
    return resultado;
}


function calculadora(numero1, numero2, operador) {
    switch (operador){
        case "+": 
        return numero1 + numero2

        case "-":
            return numero1 - numero2

        case "*":
            return numero1 * numero2

        case "/":
            return numero1/numero2

        default:
            return "operador inválido"
    }

}