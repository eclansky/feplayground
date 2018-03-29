console.log("Lets go through a while loop");

var number = 1;
while (number <= 5){
    console.log(number)
    number++;
}
/*
var gotName = false;
while(gotName == false){
    var userName = prompt("Yo person! Enter your name to add to my guestbook");

    if (confirm("Please confirm your name is " + userName)) {
        alert("Why, hello " + userName + "!");
        gotName = true;
    }
}
*/

function cubeit (a) {

  return a*a*a;
}

console.log("Here's the cube of a: " + cubeit(2));
