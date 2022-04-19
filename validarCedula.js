function valida(cedula){
    
    cedula = cedula;
    var cantidad = cedula.length;
    
    if(cantidad == 11){
                
        c = cedula.split('');
        // ejemplo [2,2,3,0,0,2,2,4,3,7,9]
        v = [1,2,1,2,1,2,1,2,1,2]
                
        var result = 0 ; 
        var ar,up,oc;
              
        for (i=0;i <10;i++){  
            up =c[i] * v[i];
            ab = up;
            
            if ( ab >= 10 ) {
                oc = ab.toString()
                    .split('')
                    .map(x => parseInt(x) )
                    .reduce( (x, y) => x + y);
            }else {
                oc = ab;
            }
            
            result = parseFloat(result) + parseFloat(oc);
        }   
            
        dp = result;
        ac = dp.toString().split('')[0] + '0';
        ac = parseInt(ac);
        uj = (ac / 10) * 10;
        
            if (uj < dp ) {
                dp = (uj + 10) - dp; 
            }   

            if (c[10] == dp) { 
                
                document.getElementById('result').innerHTML = '<p> Cédula Correcta </p>';
            } else {
                
                document.getElementById('result').innerHTML = '<p> Cédula Incorrecta </p>';    
            }
            
        }else{
            document.getElementById('result').innerHTML = '<p>Ingrese una cédula válida</p>';
        }
   }       
