var title = document.querySelectorAll(".title");
var body = document.querySelectorAll(".body");
var add = document.querySelector(".add");
var data = document.querySelectorAll(".data");
var contener = document.querySelector(".contener");

// NEW TITLE AND DESCRIPTION ADD

function createNew(){
	var h1 = document.createElement("h1");
	var p = document.createElement("p");
	var descreption = document.createElement("div");
	var titlee= document.createElement("div");
	var main= document.createElement("div");
	
	
	main.className = "main"
	descreption.className = "body"
	titlee.className = "title"
	
	
	h1.innerText = data[0].value
	p.innerText = data[1].value
	
	descreption.appendChild(p)
	titlee.appendChild(h1)
	
	main.appendChild(titlee)
	main.appendChild(descreption)
	
	titlee.addEventListener("click",function(){
		
		descreption.classList.toggle("bodyShow")	
		
	})
	data[0].value = ""
	data[1].value = ""
	return main
}



add.addEventListener("click",function(){
	if(data[0].value == ""){
		alert("Sorry for that || Plase write something")
		}else{
		contener.appendChild(createNew())
	}
})





// ===================================================================================================================
// CLICK AND SHOW SECTION 


function show(e){
	title[e].addEventListener("click",function(){	
		for(let a = 0;a<body.length;a++){
			
			if(body[a].classList.value == "body bodyShow" && body[e].classList.value !== "body bodyShow"){
				body[a].classList.remove("bodyShow")
			}
		}
		body[e].classList.toggle("bodyShow")
	}) 
}



for(var i = 0; i < body.length;i++){
 	show(i)
}


















