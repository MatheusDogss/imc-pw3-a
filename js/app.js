// alert("Olá")

let btn = document.getElementById('btn');
// console.log(btn); 
let div = document.getElementById('resultado');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

const arrPessoa = []

function cadastrar () {

    /* códigos

    console.log("Trabalho dentro da função!!");
    */

    let nomeInput = document.getElementById('nome').value;
    let sobrenomeInput = document.getElementById('sobrenome').value;
    let categoriaInput = document.getElementById('categoria').value;
    let pesoInput = document.getElementById('peso').value;
    let alturaInput = document.getElementById('altura').value;
    //---------------------------------------------------------
    // let imc = IMC(pesoInput, alturaInput);
    // let CategoriaImc = categoriaIMC(Imc);

    const pessoa = {

        nome: nomeInput,
        sobrenome: sobrenomeInput,
        categoria: categoriaInput,
        peso: pesoInput,
        altura: alturaInput,
        imc: IMC(pesoInput, alturaInput),
        categoriaIMC: categoriaIMC(IMC(pesoInput, alturaInput))

    }

    arrPessoa.push(pessoa);

    imprimir();

    console.log(arrPessoa);

    // div.innerHTML = "nome:" + nome + " Sobrenome:" + sobrenome + " Categoria" + categoria + ".";

     /* div.innerHTML = `
    
        <strong> Nome: </strong> ${nome}
        <strong> Sobrenome: </strong> ${sobrenome}
        <strong> Categoria: </strong> ${categoria}
        <strong> Imc: </strong> ${imc} - ${CategoriaImc}

    `
    */

}

function IMC (peso, altura) {

    // calcular o imc
    // peso / (altura * altura)

    return peso / Math.pow(altura,2);
}

function categoriaIMC(imc) {

    // calcluar a categoria do IMC

    if(imc < 18.5) {

        return 'Abaixo do normal'

    } else if ( imc <= 24.9 ) {

        return 'Normal'

    } else if ( imc <= 29.9 ) {

        return 'Sobrepeso'

    } else if ( imc <= 34.9 ) {

        return 'Obsidade Grau I'

    } else if ( imc <= 39.9 ) {

        return 'Obsidade Grau II'

    } else {

        return 'Obsidade Grau III'

    }
}

function imprimir() {

    div.innerHTML = '';

    for (let i = 0; arrPessoa.length; i++) {

        div.innerHTML += ` 

            <tr>

                <th scope="row"> ${i + 1} </th>
                <td> ${arrPessoa[i].nome} ${arrPessoa[i].sobrenome} </td>
                <td> ${arrPessoa[i].peso} </td>
                <td> ${arrPessoa[i].altura} </td>
                <td> ${arrPessoa[i].IMC} - ${arrPessoa[i].categoria} </td> 

            </tr>

        `
        }


        /* div.innerHTML = `
        
            <strong> Nome: </strong> ${nome}
            <strong> Sobrenome: </strong> ${sobrenome}
            <strong> Categoria: </strong> ${categoria}
            <strong> Imc: </strong> ${imc} - ${CategoriaImc}

        `
        */

}



btn.addEventListener('click', cadastrar);