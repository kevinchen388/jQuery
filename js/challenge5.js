// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

var imgs = $("img")
var msg = "Hover over an image below."
console.log(imgs)
imgs.each(function(){
	console.log(this)
	$(this).mouseover(function(){
		console.log("mouseover");
	  	$("#image").css("backgroundImage", "url('" + this.src + "')");
		$("#image").html(this.alt);
	});

	$(this).focus(function(){
		console.log("focus");
		$("#image").css("backgroundImage", "url('" + this.src + "')");
 	   	$("#image").html(this.alt);
    });

	$(this).mouseleave(function(){
		console.log("mouseleave");
		$("#image").css("backgroundImage", "url('')");
 	   	$("#image").html(msg);
    });

	$(this).blur(function(){
		console.log("blur");
		$("#image").css("backgroundImage", "url('')");
 	   	$("#image").html(msg);
    });
})
