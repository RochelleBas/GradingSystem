var total_AVG = function(){ 
  
    var total_pl = parseInt(document.getElementById("PL").value); 
    var total_mt = parseInt(document.getElementById("MT").value);
    var total_fl = parseInt(document.getElementById("FL").value);
    
    var total_AVG = (total_pl+total_mt+total_fl) / 3;

         document.getElementById("AVG").value = total_AVG;
          document.getElementById("NM").value =  document.getElementById("N").value;
          document.getElementById("SB").value =  document.getElementById("S").value;
          document.getElementById("CR").value =  document.getElementById("C").value;

          if(total_AVG<60){
            document.getElementById("EQ").value = "5";
          }
    
          if(total_AVG>59 && total_AVG< 64.4){
            document.getElementById("EQ").value = "3";
          }
    
          if(total_AVG>64.5 && total_AVG<68.9){
            document.getElementById("EQ").value = "2.75";
          }
    
          if(total_AVG>69.0 && total_AVG<73.4){
            document.getElementById("EQ").value = "2.50";
          }
    
          if(total_AVG>73.5 && total_AVG<77.9){
            document.getElementById("EQ").value = "2.25";
          }
    
          if(total_AVG>78.0 && total_AVG<82.4){
            document.getElementById("EQ").value = "2.00";
          }
    
          if(total_AVG>82.5 && total_AVG<86.9){
            document.getElementById("EQ").value = "1.75";
          }
    
          if(total_AVG>87.0 && total_AVG<91.4){
            document.getElementById("EQ").value = "1.50";
          }
    
          if(total_AVG>91.5 && total_AVG<95.9){
            document.getElementById("EQ").value = "1.25";
          }
          if(total_AVG>96.0 && total_AVG<=100){
            document.getElementById("EQ").value = "1.00";
          }
      }
