var count = 0;
var ids = ["_00", "_01", "_02","_10", "_11", "_12","_20", "_21", "_22",];
var idval = [];
var flag=0;
        
console.log("hello wolrd");

    function check(btnid){

        

        for( var i=0; i< ids.length; i++)
            if(btnid==ids[i])
                break;


        if(count%2==0)    
            idval[i]="x";
        else
            idval[i]="o";


        console.log(idval);

        if( idval[0]=="o" && idval[1]=="o" && idval[2]=="o" || idval[0]=="o" && idval[3]=="o" && idval[6]=="o" || idval[1]=="o" && idval[4]=="o" && idval[7]=="o" || idval[2]=="o" && idval[5]=="o" && idval[8]=="o" || idval[3]=="o" && idval[4]=="o" && idval[5]=="o" || idval[6]=="o" && idval[7]=="o" && idval[8]=="o" || idval[0]=="o" && idval[4]=="o" && idval[8]=="o" ||idval[2]=="o" && idval[4]=="o" && idval[8]=="o"){
            alert("o won"); flag=1;}

        if( idval[0]=="x" && idval[1]=="x" && idval[2]=="x" || idval[0]=="x" && idval[3]=="x" && idval[6]=="x" || idval[1]=="x" && idval[4]=="x" && idval[7]=="x" || idval[2]=="x" && idval[5]=="x" && idval[8]=="x" || idval[3]=="x" && idval[4]=="x" && idval[5]=="x" || idval[6]=="x" && idval[7]=="x" && idval[8]=="x" || idval[0]=="x" && idval[4]=="x" && idval[8]=="x" ||idval[2]=="x" && idval[4]=="x" && idval[8]=="x")
            alert("x won");

        if(flag==0 && count==9)
            alert("no one won");
            
      
                    




    }




			

			function getid(valid){


			var btn = document.getElementById(valid);


			if(count%2==0){
			  if (btn.value == "0" ) {
                    btn.value = "1";
                    //btn.style.background= "lightyellow";
                    btn.innerHTML = "o";
                }
            }
            else{
            	if (btn.value == "0" ) {
                    btn.value = "1";
                    //btn.style.background= "lightgreen";
                    btn.innerHTML = "x";
                }
            }

            	count = count + 1;
                

            check(valid);
            valid=0;

	}
