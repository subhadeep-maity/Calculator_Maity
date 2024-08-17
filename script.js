let input=document.getElementById("display");
const buttons=document.querySelectorAll("#key");

let string= "";

let arr =Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            string =eval(string);
            input.value =string;
        }

        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="DEL"){
            string = string.slice(0, -1);
            // string=string.substring(0,string.length-1);
            input.value=string;

        }
        else{
            string +=e.target.innerHTML;
            input.value =string;
        }
    })
})






















keys.forEach((key)=>{
    // console.log(key);
    key.addEventListener("click",(event)=>{
        const userkey=key.getAttribute("id");
        // console.log("Key 1 was cliked",userkey);
      
         var value1=event.target.textContent;
         
    })
    
    
})