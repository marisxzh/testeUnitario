//no testespec.js vai ficar o teste
// it("lista de Teste", function () {
//     expect(inteiro(1)).toBe(1);
//     expect(inteiro(2)).toBe(2);
//     expect(inteiro(3)).toBe(3);
//     expect(inteiro(4)).toBe(4);
// })

// describe("Teste de números", function(){
//     it("Fizz Buzz", function(){
//         expect(jogo(1)).toBe(1);
//         expect(jogo(2)).toBe(2);
//         expect(jogo(3)).toBe("Fizz");
//         expect(jogo(4)).toBe(4);
//         expect(jogo(5)).toBe("Buzz");
//         expect(jogo(6)).toBe("Fizz");
//         expect(jogo(7)).toBe(7);
//         expect(jogo(8)).toBe(8);
//         expect(jogo(9)).toBe("Fizz");
//         expect(jogo(10)).toBe("Buzz");
//         expect(jogo(15)).toBe("Fizz Buzz");
//     })
// })


// describe ("Teste de média", function(){
//     it ("Resultado", function(){
//         let res = aluno();
//         expect(res).toEqual("Reprovado")
//     })
    
// })

// describe("Pessoas", function(){
//     let nome = "Mariana";
//     let sobrenome = "Kaori";
//     let idade = 18;

//     let pessoa = new Pessoa(nome, sobrenome, idade);

//     it ('Teste - Nome', function() {
//         expect("Mariana").toBe(pessoa.nome())
//     })
//     it ('Teste - Nome e Sobrenome', function(){
//         expect("Mariana Kaori").toBe(pessoa.nome_completo())
//     })
//     it ('Teste - Nome, Sobrenome e Idade', function(){
//         expect("Mariana Kaori tem idade de 18").toBe(pessoa.nome_tudo())
//     })
// })



it ("Multiplicação de três números", function(){
    expect(multiplicacao(2,3,4)).toBe(24);
    expect(multiplicacao(1,5,2)).toBe(10);
    expect(multiplicacao(1,0,3)).toBe(0);
})


it ("Dividir dois números onde o denominador é diferentes de zero", function(){
    expect(divisao(10,2)).toEqual(5);
    expect(divisao(7,0)).toEqual("Não é possível dividir por 0");
})

it ("Função celsiusFahrenheit", function(){
    expect(celsiusFahrenheit(0)).toBe(32);
})

it ("Função fahrenheitCelsius", function(){
    expect(fahrenheitCelsius(32)).toBe(0);
})

it ("Função média", function(){
    expect(media(3,4,5)).toBe(4);
    expect(media(10,20,30)).toBe(20);
})

it ("Contar caracteres", function(){
    expect(contarCaracter("hello")).toBe(5);
    expect(contarCaracter("12345")).toBe(5);
})

it ("Calculadora", function(){
    expect(calculadora(4,2,"+")).toBe(6);
    expect(calculadora(4,2,"/")).toBe(2);
})