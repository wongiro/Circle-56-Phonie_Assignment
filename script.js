let userInput = document.getElementById("userInput");
let message = document.getElementById("message")
let glo = document.createElement("img");
let MTN = document.createElement("img");
let Airtel = document.createElement("img");
let Etisalat = document.createElement("img");
glo.src = "Glo.png";
MTN.src = "Mtn.png"
Airtel.src = "Airtel.png"
Etisalat.src = "Etisalat.png" 
glo.setAttribute("width", "50px");
glo.setAttribute("height", "50px");
MTN.setAttribute("width", "50px");
MTN.setAttribute("height", "50px");
Airtel.setAttribute("width", "50px");
Airtel.setAttribute("height", "50px");
Etisalat.setAttribute("width", "50px");
Etisalat.setAttribute("height", "50px");
let src = document.getElementById("message");


function myFunction() {
  
    if(userInput.value != "" && userInput.value.length === 11 ){

    if (userInput.value.startsWith("0803") ||userInput.value.startsWith("0806")||   userInput.value.startsWith("0703")||userInput.value.startsWith("0706")||   userInput.value.startsWith("0813")||userInput.value.startsWith("0816")||   userInput.value.startsWith("0810")||userInput.value.startsWith("0814")||   userInput.value.startsWith("0903")||userInput.value.startsWith("0906"))
    {
       src.appendChild(MTN) 
        // message.innerHTML = "This is MTN";
    } else  
    if (userInput.value.startsWith("0805") ||userInput.value.startsWith("0807")||   userInput.value.startsWith("0705")||userInput.value.startsWith("0815") ||   userInput.value.startsWith("0811") ||userInput.value.startsWith("0905"))
    {
       src.appendChild(glo) 
        // message.innerHTML = "This is GlO";
    } else  
    if (userInput.value.startsWith("0802")||userInput.value.startsWith("0808")||   userInput.value.startsWith("0704")||userInput.value.startsWith("0708")||   userInput.value.startsWith("0812")||userInput.value.startsWith("0701") ||   userInput.value.startsWith("0901")|| userInput.value.startsWith("0902")||   userInput.value.startsWith("0907"))
    {
       src.appendChild(Airtel) 
        // message.innerHTML = "This is Airtel";
    } else  
    if (userInput.value.startsWith("0809") ||userInput.value.startsWith("0818")||   userInput.value.startsWith("0817")||userInput.value.startsWith("0908")||   userInput.value.startsWith("0909"))
    {

        // message.innerHTML = "This is Etisalat";
       src.appendChild(Etisalat) 
    }  

    } else {
        message.innerHTML = "Invalid Number, Enter using the stated format"
    }
     document.getElementById('userInput').value = ''   
}