//função que reverte um número
// reverse(12345) => 54321
reverse = (number) =>{
        return parseInt(
          number.toString()
          .split('').reverse().join("")
        )
      }
      
      function numerosReversiveis(max, mostraTodos){
      
        //set para evitar contabilizar um número e seu reverso
        //duas vezes
        let set = new Set();
        
        //checa todos os números de 1 até o número desejado
        for (let i = 1; i < max; i++) {
        
          //calcula o reverso do número e sua soma com ele
          let rev = reverse(i);
          let soma = i + rev;
      
          //verifica se o número não termina em 0
          //e se a soma é ímpar
          if(i%10 != 0 && soma % 2 == 1){
            //checa se o reverso do número já não foi
            //contabilizado
            if(!set.has(rev)){
              set.add(i);
            }
          }
        }
      
        if(mostraTodos){
          console.log(set);
        }
        
        console.log("Quantidade de números reversíveis de 1 a ",max,": ",set.size);
      }
      
      numerosReversiveis(1000000,false)