$("#useBilling").click(function(){
	if (this.checked){
		console.log("checked");
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true);
	}
	else{
		console.log("unchecked");
		$("#home").val("");
		$("#home").prop("disabled", false);
	}
});


// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
