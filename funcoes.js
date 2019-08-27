function calcular(){
    var n1 = (document.getElementById("nota1"))
    var n11 = Number(n1.value)
    var n2 = (document.getElementById("nota2"))
    var n22 = Number(n2.value)
    var n3 = (document.getElementById("nota3"))
    var n33 = Number(n3.value)
    var n4 = (document.getElementById("nota4"))
    var n44 = Number(n4.value)
    var media = Number((n11+n22+n33+n44)/4)
    if(media>=7)
    {
        resultado.innerHTML = `VOCÊ FOI APROVADO COM MÉDIA ${media}`
    }
    else
    {
        resultado.innerHTML = `VOCÊ FOI REPROVADO COM MÉDIA ${media}`
    }
}
function adicionar(){
    var n1 = (document.getElementById("nota11"))
    var n11 = Number(n1.value)
    var n2 = (document.getElementById("nota22"))
    var n22 = Number(n2.value)
    var media = ((n11+n22)/2)
    if(media>=0 && media<=3)
    {
       res.innerHTML = `você foi REPROVADO com média ${media}`
    }
    else if(media>=3 && media<=7)
    {
       res.innerHTML = `você presisara fazer um novo exame, pois sua média foi ${media}`
    }
    else
    {
       res.innerHTML = `você foi APROVADO com média ${media}`
    }
}
var vetnum = []
function descubra(){
    var n1 = (document.getElementById("primeiro"))
    var n2 = (document.getElementById("segundo"))
    vetnum[1]=Number(n1.value)
    vetnum[2]=Number(n2.value)
    if (vetnum[1]<vetnum[2])
    {
        res1.innerHTML = `O menor numero é ${vetnum[1]}`
    }
    else
    {
        res1.innerHTML = `O menor numero é ${vetnum[2]}`
    }
}
function ver(){
    var pega1 = (document.getElementById("numero1"))
    var n1 = Number(pega1.value)
    var pega2 = (document.getElementById("numero2"))
    var n2 = Number(pega2.value)
    var pega3 = (document.getElementById("numero3"))
    var n3 = Number(pega3.value)
    if(n1>n2 && n1>n3)
    {
        res2.innerHTML = `O maior numero é ${n1}`
    } 
    else if(n2>n1 && n2>n3)
    {
        res2.innerHTML = `O maior numero é ${n2}`
    }
    else
    {
        res2.innerHTML = `O maior numero é ${n3}`
    }
}
function prossesar(){
    var pnum = Number(document.getElementById("numero11").value)
    var snum = Number(document.getElementById("numero22").value)
    var escolha = Number(document.getElementById("escolha").value)
    var resultado
    switch(escolha){
        case 1: resultado = `A media é ${(pnum+snum)/2}`
            break;
        case 2: if(pnum>snum)
                {
                    resultado = `A diferença é ${pnum-snum}`
                }
                else
                {
                resultado = `A diferença é ${snum-pnum}`
                }
                break;
        case 3: resultado = `A multiplicação é ${pnum*snum}`
            break;
        case 4: resultado = `A divisão é ${pnum/snum}`
            break;
        default: resultado=`opcao invalida`
    }
    res3.innerHTML=(resultado)
}
function versala(){
    var salario = Number(document.getElementById("sala").value)
    if (salario<500)
    {
        salario = ((salario*30)/100)+salario
        res4.innerHTML = `seu salario reajustou para R$${salario}`
    }
    else
    {
        res4.innerHTML=`voce nao tem direito a um reajuste seu salrio continua R$${salario}`
    }
}