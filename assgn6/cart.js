//ADD TO CART BUTTON + CART ICON CLICK COUNTER 
//timer credit to https://stackoverflow.com/questions/38393740/change-content-of-html-element-div-for-few-seconds

//ADD TO LIKES BUTTON ("Favorites") + LIKES ICON CLICK COUNTER 
var clicks = 0;
document.getElementById('likesButton').onclick=addedToLikes;
function addedToLikes(){
	clicks=1;
//	if(clicks =1 || clicks % 2 !=0){
		document.getElementById("addToLikesClicks").innerHTML=clicks;
		document.getElementById('likesButton').innerHTML="<span style='color:white;'>Favorited!</span>"
		window.scrollTo({top: 0, behavior: 'smooth'});
};

var name = 'Round Knit Pouf'
var color = null;
var fill = null;
//var cart = [];
var price = 20;

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
	var color = "ASS";
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
	var color = "MH";
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
	var color = "RD";
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
	var color = "CD";
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
	var fill = "DD";
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
	var fill = "HAPB";
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
	var fill = "MD";

};

/* IMAGE CAROUSEL (EXTRA CREDIT) (CREDIT TO W3SCHOOLS https://www.w3schools.com/howto/howto_js_slideshow.asp) */
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* ASSIGNMENT 6B BELOW */
function pillowSelection(name, color, fill, price){
	this.name=name;
	this.color=color;
	this.fill=fill;
	this.price=price;
}

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
	var item = new pillowSelection(name, color, fill, price);
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (cart==null) {
		cart=[];
	}
	cart.push(item);
	localStorage.setItem("cart", JSON.stringify(cart));
	console.log('test');
};

function cartpageLoad(){
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (cart==null) {
		document.getElementById('productInfo').innnerHTML = "Cart Empty";
		}
		else{
		//change innerhtml to display items
		for (i = 0; i < cart.length; i++) {
			var item = cart[i];
			var itemName = item.name
			var itemColor = item.color;
			var itemFill = item.fill;
			var itemPrice = item.price;
		}
}
	localStorage.setItem("cart", JSON.stringify(cart));
	console.log('test');
}
