   class respuesta{
        constructor(){
            this.altura = document.getElementById("altura");
            this.edad = document.getElementById("edad");
            this.peso = document.getElementById("peso"); 
        }
         calcular(){
             let altura = this.altura.value
             let edad =this.edad.value
             let peso= this.peso.value
             let guardar= (altura *1/100)/100
              let valor =peso / guardar^2
              if (valor <=18){
                 alert(" Bajo peso" + valor);
             } 
              if (valor >18.5 && valor <=24.9){
                  alert(" peso normal" +valor)
              }
              if ( valor >25 && valor <=26.9){
                  alert("sobre peso " +valor)
              }
              if ( valor >27 && valor <=29.9){
                alert("obecidad "+valor)
              }
              if ( valor >30 && valor <=34.9){
                alert("obecidad grado 1 " +valor)
              }
              if ( valor >35 && valor <=39.9){
                alert("obecidad grado 2 "+valor)
              }
              if ( valor >40 ){
                alert("obecidad grado 3 "+valor)
              }
         }
    }
    let total = new respuesta ()