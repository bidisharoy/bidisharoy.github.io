//hi rushil!!!!

//ADD TO CART BUTTON + CART ICON CLICK COUNTER 
//timer credit to https://stackoverflow.com/questions/38393740/change-content-of-html-element-div-for-few-seconds
var clicks = 0;
var originalText = document.getElementById('cartButton').innerHTML;
document.getElementById('cartButton').onclick=addedToCart;
function addedToCart(){
	document.getElementById('cartButton').innerHTML="<span style='color:#E4C442;'>Added!</span";
	clicks +=1;
	document.getElementById("addToCartClicks").innerHTML=clicks;
	setTimeout(function() {
		document.getElementById('cartButton').innerHTML=originalText;
	}, 950);
	window.scrollTo({top: 0, behavior: 'smooth'});
};

//ADD TO LIKES BUTTON ("Favorites") + LIKES ICON CLICK COUNTER 
var clicks = 0;
var originalLikesButton = document.getElementById('likesButton').innerHTML;
document.getElementById('likesButton').onclick=addedToLikes;
function addedToLikes(){
	clicks=1;
//	if(clicks =1 || clicks % 2 !=0){
		document.getElementById("addToLikesClicks").innerHTML=clicks;
		document.getElementById('likesButton').innerHTML="<span style='color:white;'>Favorited!</span>"
		window.scrollTo({top: 0, behavior: 'smooth'});
		//setTimeout(function(AddedtoLikes) {
		//document.getElementById('likesButton').innerHTML='Remove from Favorites';
		//}, 950);
};

/*
function setRemove(){
document.getElementById('likesButton').innerHTML="Remove from Favorites"
		} else if(clicks % 2 == 0){
		document.getElementById("addToLikesClicks").innerHTML='0';
		document.getElementById('likesButton').innerHTML="<span style='color:#E4C442;'>Removed!</span>"
		}
	//document.getElementByClass("headerLikesStyle blackFavorite").style.visibility='visible';
*/
//var imgReplace = document.getElementsByClassName("myImg")[0];
//imgReplace.src = "blackheart.svg"; 
//imgReplace.style.visibility = "visible";
//	setTimeout(function() {
//		document.getElementById('likesButton').innerHTML=originalLikesButton;
//	}, 950);



//PICKING COLORS
var originalStyleASS = document.getElementById('pickColorASS').innerHTML;
var originalStyleMH = document.getElementById('pickColorMH').innerHTML;
var originalStyleRD = document.getElementById('pickColorRD').innerHTML;
var originalStyleCD = document.getElementById('pickColorCD').innerHTML;

document.getElementById('pickColorASS').onclick=pickedColorASS;
function pickedColorASS(){
	document.getElementById('pickColorASS').style.border='outset black';
	document.getElementById('pickColorASS').innerHTML=originalStyleASS;
	document.getElementById('pickColorMH').style.border='solid 1px';
	document.getElementById('pickColorMH').innerHTML=originalStyleMH;
	document.getElementById('pickColorMH').style.color='gray';
	document.getElementById('pickColorMHText').style.color='gray';
	document.getElementById('pickColorRD').style.border='solid 1px';
	document.getElementById('pickColorRD').innerHTML=originalStyleRD;
	document.getElementById('pickColorRD').style.color='gray';
	document.getElementById('pickColorRDText').style.color='gray';
	document.getElementById('pickColorCD').style.border='solid 1px';
	document.getElementById('pickColorCD').innerHTML=originalStyleCD;
	document.getElementById('pickColorCD').style.color='gray';
	document.getElementById('pickColorCDText').style.color='gray';
};

document.getElementById('pickColorMH').onclick=pickedColorMH;
function pickedColorMH(){
	document.getElementById('pickColorMH').style.border='outset black';
	document.getElementById('pickColorMH').innerHTML=originalStyleMH;
	document.getElementById('pickColorASS').style.border='solid 1px';
	document.getElementById('pickColorASS').innerHTML=originalStyleASS;
	document.getElementById('pickColorASS').style.color='gray';
	document.getElementById('pickColorASSText').style.color='gray';
	document.getElementById('pickColorRD').style.border='solid 1px';
	document.getElementById('pickColorRD').innerHTML=originalStyleRD;
	document.getElementById('pickColorRD').style.color='gray';
	document.getElementById('pickColorRDText').style.color='gray';
	document.getElementById('pickColorCD').style.border='solid 1px';
	document.getElementById('pickColorCD').innerHTML=originalStyleCD;
	document.getElementById('pickColorCD').style.color='gray';
	document.getElementById('pickColorCDText').style.color='gray';
};

document.getElementById('pickColorRD').onclick=pickedColorRD;
function pickedColorRD(){
	document.getElementById('pickColorRD').style.border='outset black';
	document.getElementById('pickColorRD').innerHTML=originalStyleRD;
	document.getElementById('pickColorASS').style.border='solid 1px';
	document.getElementById('pickColorASS').innerHTML=originalStyleASS;
	document.getElementById('pickColorASS').style.color='gray';
	document.getElementById('pickColorASSText').style.color='gray';
	document.getElementById('pickColorMH').style.border='solid 1px';
	document.getElementById('pickColorMH').innerHTML=originalStyleMH;
	document.getElementById('pickColorMH').style.color='gray';
	document.getElementById('pickColorMHText').style.color='gray';
	document.getElementById('pickColorCD').style.border='solid 1px';
	document.getElementById('pickColorCD').innerHTML=originalStyleCD;
	document.getElementById('pickColorCD').style.color='gray';
	document.getElementById('pickColorCDText').style.color='gray';
};

document.getElementById('pickColorCD').onclick=pickedColorCD;
function pickedColorCD(){
	document.getElementById('pickColorCD').style.border='outset black';
	document.getElementById('pickColorCD').innerHTML=originalStyleCD;
	document.getElementById('pickColorASS').style.border='solid 1px';
	document.getElementById('pickColorASS').innerHTML=originalStyleASS;
	document.getElementById('pickColorASS').style.color='gray';
	document.getElementById('pickColorASSText').style.color='gray';
	document.getElementById('pickColorMH').style.border='solid 1px';
	document.getElementById('pickColorMH').innerHTML=originalStyleMH;
	document.getElementById('pickColorMH').style.color='gray';
	document.getElementById('pickColorMHText').style.color='gray';
	document.getElementById('pickColorRD').style.border='solid 1px';
	document.getElementById('pickColorRD').innerHTML=originalStyleRD;
	document.getElementById('pickColorRD').style.color='gray';
	document.getElementById('pickColorRDText').style.color='gray';
};

//PICKING FILLINGS
var originalStyleDD = document.getElementById('pickFillDD').innerHTML;
var originalStyleHAPB = document.getElementById('pickFillHAPB').innerHTML;
var originalStyleMD = document.getElementById('pickFillMD').innerHTML;

document.getElementById('pickFillDD').onclick=pickedFillDD;
function pickedFillDD(){
	document.getElementById('pickFillDD').style.border='outset black';
	document.getElementById('pickFillDD').innerHTML=originalStyleDD;
	document.getElementById('pickFillHAPB').style.border='solid 1px';
	document.getElementById('pickFillHAPB').innerHTML=originalStyleHAPB;
	document.getElementById('pickFillHAPB').style.color='gray';
	document.getElementById('pickFillHAPBText').style.color='gray';
	document.getElementById('pickFillMD').style.border='solid 1px';
	document.getElementById('pickFillMD').innerHTML=originalStyleMD;
	document.getElementById('pickFillMD').style.color='gray';
	document.getElementById('pickFillMDText').style.color='gray';
};

document.getElementById('pickFillHAPB').onclick=pickedFillHAPB;
function pickedFillHAPB(){
	document.getElementById('pickFillHAPB').style.border='outset black';
	document.getElementById('pickFillHAPB').innerHTML=originalStyleHAPB;
	document.getElementById('pickFillDD').style.border='solid 1px';
	document.getElementById('pickFillDD').innerHTML=originalStyleDD;
	document.getElementById('pickFillDD').style.color='gray';
	document.getElementById('pickFillDDText').style.color='gray';
	document.getElementById('pickFillMD').style.border='solid 1px';
	document.getElementById('pickFillMD').innerHTML=originalStyleMD;
	document.getElementById('pickFillMD').style.color='gray';
	document.getElementById('pickFillMDText').style.color='gray';
};

document.getElementById('pickFillMD').onclick=pickedFillMD;
function pickedFillMD(){
	document.getElementById('pickFillMD').style.border='outset black';
	document.getElementById('pickFillMD').innerHTML=originalStyleMD;
	document.getElementById('pickFillDD').style.border='solid 1px';
	document.getElementById('pickFillDD').innerHTML=originalStyleDD;
	document.getElementById('pickFillDD').style.color='gray';
	document.getElementById('pickFillDDText').style.color='gray';
	document.getElementById('pickFillHAPB').style.border='solid 1px';
	document.getElementById('pickFillHAPB').innerHTML=originalStyleHAPB;
	document.getElementById('pickFillHAPB').style.color='gray';
	document.getElementById('pickFillHAPBText').style.color='gray';
};


/* CODE THAT DID NOT WORK / SAVING FOR LATER

var loserColors=[document.getElementById('pickColorMH'), document.getElementById('pickColorRD'), document.getElementById('pickColorCD')];

var addToCartButton = document.getelementbyclassname('addToCart')
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

document.getElementById('cartButton').onclick=countClicks;
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
