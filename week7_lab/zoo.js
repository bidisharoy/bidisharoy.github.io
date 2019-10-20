#link HTML and CSS here

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.type = “MyAnimal”;
  this.image = “anImageOfMyAnimal.jpg”;
}
function Fox(name, age) {
  this.name = name;
  this.age = age;
  this.type = “MyAnimal”;
  this.image = “anImageOfMyAnimal.jpg”;
}
function Penguin(name, age) {
  this.name = name;
  this.age = age;
  this.type = “MyAnimal”;
  this.image = “anImageOfMyAnimal.jpg”;
}

var animals = [new Tiger(), new Fox(), new Penguin()];
var names = [new Tiggy, new Foxy, new Marvin()];


generateRandomIndex(maxIndex) {
	math.floor(math.random() * maxIndex)
}

generateRandomName(maxIndex) {
	math.floor(math.random() * names.length)
}