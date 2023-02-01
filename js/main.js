
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado Por Clicar";
    //console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://www.terra.com.br/");
    window.location.href = "https://www.terra.com.br/";
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado Por Passar o Mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado Por Passar o Mouse";
    //alert("Trocar Texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o Mouse Aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o Mouse Aqui";
}
function load(){
    alert("Pagina Carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
function soma(n1, n2) {
    return n1 + n2;
}
*/
/*
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;

}

var idade = prompt("Qual sua Idade");
validaIdade(idade);
console.log(validar);
*/

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new (Date);
alert(d);
*/



/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/

/*

var count = 0;
while (count < 5){
    console.log(count);
        count = count + 1;
};

*/



/*
var idade = prompt("Qual sua Idade?");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
};
*/





/*
var frutas = [{ nome: 'Maça', cor: 'Vermelha'}, { nome: 'Uva', cor: 'Roxa'}];
console.log(frutas);
alert(frutas[0].nome);

//var lista = ["Maça", "Pera", "Laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[1]);
*/

//var nome = "Nicholas Lira";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);

//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão", "Brasil"));