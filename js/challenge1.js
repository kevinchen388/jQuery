$("#subscribe").click(function(){
	if (this.checked){
		console.log("selected");
		$("#emailField").css("display", "block")
	}
	else {
		console.log("Not selected");
		$("#emailField").css("display", "none")
	}
})

// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
//   // 	Advanced Option....
//   // 	x.style.display == "block" ?
// 		// x.style.display = "none" :
// 		// x.style.display = "block";
// }
