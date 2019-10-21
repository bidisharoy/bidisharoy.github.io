/*var addToCartButton = document.getelementbyclassname('addToCart')
for (var i = 0; i < addToCartButton.length, i++) {
	var button = addToCart[i]
	button.addEventListener('click', function(event) {
		var buttonClicked = event.target
		buttonClicked.
	})
}

var pickColorButton = document.getelementbyclassname('box')
for (var i = 0; i < box.length, i++) {
	var color = box[i]
	color.addEventListener('click', function(event) {
		var colorSelect = event.target
		colorSelect.toggleClass('.boxMyClickState')
	})
}


(function (){
	let CartInfo = getelementbyid('headerCart')
})();


// x.innerhtml
// html event attributes (onclick, onmousedown, etc.)
// local storage vs session storage


var addToCartButton = document.getelementbyclassname('Button1Text');
var headerCart = document.getElementById(headerCart);

addToCartButton.onclick = function()
{updateHeaderCart()};

function updateHeaderCart() {
headerCart.innerHTML = "ADDED"
};

*/


//CREDIT TO https://stackoverflow.com/questions/38393740/change-content-of-html-element-div-for-few-seconds
var clicks = 0;
var originalText = document.getElementById('cartButton').innerHTML;
document.getElementById('cartButton').onclick=addedToCart;
function addedToCart(){
	//var originalText = document.getElementById('cartButton').innerHTML;
	document.getElementById('cartButton').innerHTML="<span style='color:#E4C442;'>Added!</span";
	//document.getElementById('cartButton').innerHTML="<span style='color: red;'>**Message</span>";
	//cartButton.style.fontSize="30px";
	clicks +=1;
	document.getElementById("clicks").innerHTML=clicks;
	setTimeout(function() {
		document.getElementById('cartButton').innerHTML=originalText;
		//originalText.style.fontSize="22px";
	}, 950);
	//var clicks = 0;
	//document.getElementById('cartButton').onclick=clickCounter;
	//function clickCounter(){
		//clicks +=1;
	//document.getElementById("clicks").innerHTML=clicks;
};


/* document.getElementById('cartButton').onclick=countClicks;
var cnt=0;
function countClicks(){
	cnt=parseInt(cnt)+parseInt(1);
	var divData=document.getElementById("cartButton");
	divData.innerHTML=cnt;
}


var clicks = 0;
document.getElementById('cartButton').onclick=clickCounter;
function clickCounter(){
	clicks +=1;
	document.getElementById("clicks").innerHTML=clicks;
};

*/
