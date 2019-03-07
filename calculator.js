const screen_div = document.querySelector(".screen > p"); //Accesing the calculator screen

//Button (1,2,3,4,5,6,7,8,9,0,+,-,*,/):
function insert(num){
    document.form.textview.value = document.form.textview.value + num;
    var nr=document.form.textview.value;
    
    if (nr.length>16 && nr.length<=20){
        document.querySelector('.screen').classList.add('resize');
      } else  if ( nr.length>21){
        document.querySelector('.screen').classList.remove('resize');
        document.querySelector('.screen').classList.add('resizePlus');
    } else  {
        document.querySelector('.screen').classList.remove('resizePlus');
     }
    if (nr.length>=27){
        back()
        alert("Number too long! ");
           }

    document.getElementById(num).classList.add("gray-glow");
    setTimeout(function(){document.getElementById(num).classList.remove("gray-glow")},300);
}

// Button "=":
function equal(){
    console.log("equal");
    var exp = document.form.textview.value;
    if (exp){
        document.form.textview.value = eval(exp);
            }

    if (nr.length>16 && nr.length<=20){
        document.querySelector('.screen').classList.add('resize');
         } else  if ( nr.length>21){
                document.querySelector('.screen').classList.remove('resize');
                document.querySelector('.screen').classList.add('resizePlus');
                } else  {
                     document.querySelector('.screen').classList.remove('resizePlus');
                    }

    if (nr.length>=27){
          back()
          alert("Number too long! ");
             }        
        
    document.getElementById('egal').classList.add("gray-glow");
    setTimeout(function(){document.getElementById('egal').classList.remove("gray-glow")},300);        
}

//Button C :
function clean(){
    document.querySelector(".screen").classList.remove('resize');
    document.querySelector(".screen").classList.remove('resizePlus');
    document.form.textview.value="";

    document.getElementById('C').classList.add("gray-glow");
    setTimeout(function(){document.getElementById('C').classList.remove("gray-glow")},300); 
 }

//Button 'Del':
function back(){
    var exp=document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
    
    if (document.form.textview.value.length>16 && document.form.textview.value.length<=20){
        document.querySelector('.screen').classList.remove('resizePlus');
        document.querySelector('.screen').classList.add('resize')
      } else  if ( document.form.textview.value.length<=16){
        document.querySelector('.screen').classList.remove('resize');
   
    }

    document.getElementById('del').classList.add("gray-glowBack");
    setTimeout(function(){document.getElementById('del').classList.remove("gray-glowBack")},300);
}  

