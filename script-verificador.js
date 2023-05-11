
function verificar() {

    var agora = new Date()
    var ano = agora.getFullYear()
    
    var datan = document.getElementById(`datan`)
    var nasc = Number(datan.value)
    var idade = ano - nasc
    var sexo = document.getElementsByName(`sexo`)
    
    var res = document.getElementById(`res`)
    var img = document.getElementById(`imagem`)

    var gênero =''
        if (sexo[0].checked) {
            gênero = "um homem"
        }

        else {
            gênero = "uma mulher"
        }

    res.innerHTML = `Identificamos ${gênero} de ${idade} anos.`

    if (nasc < 1900 || nasc >= ano) {
        
        window.alert(`[ERRO] Por favor digite uma data válida entre 1900 e 2022.`)
        res.innerHTML = "Preencha os dados acima para ver o resultado."
    }

    else if (idade <= 11) {

        if (sexo[0].checked) {
            img.style.backgroundImage = "url(identificador/criança-menino-mini.jpg"
            img.style.display = "block"
        }

        else {
            img.style.backgroundImage = "url(identificador/criança-menina-mini.jpg)"
            img.style.display = "block"
        }
    }

    else if (idade <= 20) {
        if (sexo[0].checked) {
            img.style.backgroundImage = "url(identificador/adolescente-homem-mini.jpg)"
            img.style.display = "block"
            
        }

        else {
            img.style.backgroundImage = "url(identificador/adolescente-mulher-mini.jpg)"
            img.style.display = "block"
        }
    }

    else if (idade <= 65) {
        if (sexo[0].checked) {
            img.style.backgroundImage = "url(identificador/homem-adulto-mini.jpg)"
            img.style.display = "block"
        }

        else {
            img.style.backgroundImage = "url(identificador/mulher-adulta-mini.jpg)"
            img.style.display = "block"
        }
    }

    else if (idade > 65) {
        if (sexo[0].checked) {
            img.style.backgroundImage = "url(identificador/homem-idoso-mini.jpg)"
            img.style.display = "block"
        }

        else {
            img.style.backgroundImage = "url(identificador/mulher-idosa-mini.jpg)"
            img.style.display = "block"
        }
    }

}



/* Ao cicar em VERIFICAR:

1) Coletar o ano atual, subtrair o número informado pelo usuário e criar mensagem com a idade do usuário; - OK

1.2) Se o número digitado for maior do que ano atual, criar alerta de erro; - OK

2) Coletar informação do formulário para saber se é H ou M; - OK

3) Considerando as informações dos itens 1 e 2, temos as seguintes possibilidades: criança H (<=11), jovem H (<=20), adulto H (<=65), idoso H (>65), crinça M (<=11), jovem M (<=20), adulto M (<=65) e idosa M (>65);
*/