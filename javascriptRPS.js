var x=0;
var slides=[];


function setReady(){
	document.getElementById("winner").style.display="none";
	document.getElementById("tie").style.display="none";
	document.getElementById("looser").style.display="none";

  document.getElementById("again").style.pointerEvents="none";
  
  startTimer();

}


function startTimer(){
	document.getElementById("ready").style.pointerEvents="none";
	var three= document.getElementById('3');
	var two= document.getElementById('2');
	var one= document.getElementById('1');
	var go= document.getElementById('0');
    
    document.getElementById("basicRules").style.display="none";

    var rock=  document.getElementById("rockSlide");
    var paper= document.getElementById("paperSlide");
    var seasor= document.getElementById("seasorsSlide");
 
    
    slides.push(rock,paper,seasor);

    var i=0;

   myVar = setInterval(showSlides, 70);


	var countDown=[];
	countDown.push(three,two,one,go);
	console.log("kool by far");
    var i=1;
    countDown[0].style.display="block";
    CountLoop();
    function CountLoop(){

     setTimeout(function () {   
     countDown[i-1].style.display="none";
		countDown[i].style.display="block";
		if(i==3 ){
			 clearInterval(myVar);
			 document.getElementById("ques").style.display="block";
			 var k=0
			 for(k=0;k<slides.length ;k++){
			 	slides[k].style.display="none";
			 }
           //mainKHela
           var result= Math.floor((Math.random() * 3) );
           
           document.getElementById("rock").style.pointerEvents="auto";
           document.getElementById("paper").style.pointerEvents="auto";
           document.getElementById("seasors").style.pointerEvents="auto";

           document.getElementById("rock").onclick = function() {rockBottom(result)};
           document.getElementById("paper").onclick = function() {paperBottom(result)};
           document.getElementById("seasors").onclick = function() {seasorBottom(result)};

		} 
      i++;                     
      if (i < 4) {            
         CountLoop();       
       }                        
      }, 800)
    }

 
}


var i=0;
	
  function showSlides()
  {


    if(i==0)
    {
      slides[0].style.display="block";
      slides[1].style.display="none";
      slides[2].style.display="none";
      i=1;
      
    }
    else if(i==1)
    {
      slides[0].style.display="none";
      slides[1].style.display="block";
      slides[2].style.display="none";
      i=2;
      
    }
    else if(i==2)
    {
      slides[0].style.display="none";
      slides[1].style.display="none";
      slides[2].style.display="block";
      i=0;
      
    }
  
  }

function rockBottom(result){
	document.getElementById("ques").style.display="none";
	document.getElementById("0").style.display="none";
	document.getElementById("ready").style.display="none";
	document.getElementById("again").style.display="block";
	document.getElementById("again").style.pointerEvents="auto";


	
	 slides[result].style.display="block";
	 if(result==0){
           document.getElementById("tie").style.display="block";
	 }

	 else if(result==1){
         document.getElementById("looser").style.display="block";
	 }	
	 else if(result==2){
	 	document.getElementById("winner").style.display="block";
	 }
 document.getElementById("rock").style.pointerEvents="none";
  document.getElementById("paper").style.pointerEvents="none";
  document.getElementById("seasors").style.pointerEvents="none";

}

function paperBottom(result){
	 
	document.getElementById("ques").style.display="none";
	document.getElementById("0").style.display="none";
	document.getElementById("ready").style.display="none";
	document.getElementById("again").style.display="block";

	
	 slides[result].style.display="block";
	 if(result==1){
           document.getElementById("tie").style.display="block";
	 }

	 else if(result==2){
         document.getElementById("looser").style.display="block";
	 }	
	 else if(result==0){
	 	document.getElementById("winner").style.display="block";
	 }
   document.getElementById("rock").style.pointerEvents="none";
  document.getElementById("paper").style.pointerEvents="none";
  document.getElementById("seasors").style.pointerEvents="none";

  document.getElementById("again").style.pointerEvents="auto";	 
}

function seasorBottom(result){
	document.getElementById("ques").style.display="none";
	document.getElementById("0").style.display="none";

	document.getElementById("ready").style.display="none";
	document.getElementById("again").style.display="block";
	
	 slides[result].style.display="block";
	 if(result==2){
           document.getElementById("tie").style.display="block";
	 }

	 else if(result==0){
         document.getElementById("looser").style.display="block";
	 }	
	 else if(result==1){
	 	document.getElementById("winner").style.display="block";
	 }
 
	  document.getElementById("rock").style.pointerEvents="none";
  document.getElementById("paper").style.pointerEvents="none";
  document.getElementById("seasors").style.pointerEvents="none";
  document.getElementById("again").style.pointerEvents="auto";
}

    
