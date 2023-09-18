async function getEndereco(cep){
    var erroMesage=document.getElementById("error")
    erroMesage.innerHTML=""
    try{
var consultaCEP =await fetch(`https://viacep.com.br/ws/${cep}/json/`);
var consultaCEPJson=await consultaCEP.json();
if(consultaCEPJson.erro){
    console.log("erro");
    erroMesage.innerHTML="CEP invalido"
throw Error("CEP não existente! ");
}
var cidade = document.getElementById("cidade")
var endereco = document.getElementById("endereco")
var estado = document.getElementById("estado")
var bairro = document.getElementById("bairro")

cidade.value=consultaCEPJson.localidade
bairro.value=consultaCEPJson.bairro
endereco.value=consultaCEPJson.logradouro
estado.value=consultaCEPJson.uf

console.log(consultaCEPJson);
return consultaCEPJson;
    }catch(erro){
        erroMesage.innerHTML="CEP invalido"
        console.log(erro);
    }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout",()=>getEndereco(cep.value));
