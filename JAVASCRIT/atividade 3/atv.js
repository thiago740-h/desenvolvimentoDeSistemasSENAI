function atv1()
{
    var filmes = [];
    console.log(filmes)
    filmes[0]="Batman: o cavaleiro das trevas"
    filmes[1]="Oppenheirmer"
    filmes[2]="Kung fu panda"
    filmes[3]="pica-pau"
    filmes[4]="carros"
    filmes[5]="Gigante de Aço"
    console.log(filmes)
}

function atv2()
{
    var numeros = []
    console.log(numeros)
    for(i=0; i<=2; i++){
var numero = Number(prompt(`digite seu ${i + 1}º número`)) 
numeros.push(numero)
    }
    for(i=2; i>=0; i--){
        console.log(numeros[i])
    }
    
}