//desafio 2

let LimiteAlunos = 3
  
function AlunosPresentes() {
  contar= 0;
array = [-2, -1, 0, 1, 2]
for ( let i = 0; i < array.length; i++) {
  if ( array[i] > 0) {
    console.log(array[i], 'é maior que 0')
  } else {
    console.log(array[i],' é menor ou igual a 0')
    contar+= 1;
    
  }} return contar 
  
} console.log(AlunosPresentes())
if ( AlunosPresentes() >= LimiteAlunos) {
    console.log('Aula Normal')
  } else {
    console.log('Aula Cancelada')
  }

 
