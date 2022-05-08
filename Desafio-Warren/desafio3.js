//desafio 3
function desafio3(numeros, target){

  //define uma função para fazer um DFS
  //e encontrar possíveis soluções 
  function recurse(arr,val){
    if(arr.length > limite){
      return;
    }
    if(val == 0){
      //caso encontre uma solução com n números
      //define n como limite máximo 
      //limite = arr.length;
      result.push(arr);
      return;
    }
    else if(val < 0){
      return;
    }
    else{
      //DFS  
      for (let num of numeros) {
        if(arr.length == 0 || num <= arr[arr.length-1]){
          recurse(arr.concat(num),val-num);
        }
      }
    }
  }
  result = [];

  //ordena para garantir que números maiores
  //serão utilizados primeiro na soma
  numeros.sort((a,b) => b-a); 
  limite = 999999999; //numero grande como limite
  recurse([],target);
  return result;
}

console.log(desafio3([2,3,4],10));

