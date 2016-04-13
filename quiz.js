//variables
var correct = 0;

//prompt
var answer1 = prompt("What is jakes Age...")
var answer2 = prompt("What is jakes Gender...")
var answer3 = prompt("When does Jake graduate...")
var answer4 = prompt("What sport does Jake enjoy...")
var answer5 = prompt("Who does jake hate...")


// if statement
if ( answer1.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer2.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer3.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer4.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
// if statement
if ( answer5.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}

if (correct == 5){
	var award = "gold"
}

if (correct == 4){
	var award = "silver"
}

if (correct == 3){
	var award = "bronze"
}

if (correct == 2){
	var award = "fourth"
}

if (correct == 1){
	var award = "fifth"
}

document.write("<p>Your score is: "+correct+"You earned: "+award+"</p>")

