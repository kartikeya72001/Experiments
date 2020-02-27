var counter = 3;
function upvote() {
    counter = counter + 1;
    document.getElementById("votes").innerHTML = counter + " " + "Votes";
}
function downvote() {
    counter = counter - 1;
    document.getElementById("votes").innerHTML = counter + " " + "Votes";
}
function upvote2() {
    counter = counter + 1;
    document.getElementById("votes2").innerHTML = counter + " " + "Votes";
}
function downvote2() {
    counter = counter - 1;
    document.getElementById("votes2").innerHTML = counter + " " + "Votes";
}
function upvote3() {
    counter = counter + 1;
    document.getElementById("votes3").innerHTML = counter + " " + "Votes";
}
function downvote3() {
    counter = counter - 1;
    document.getElementById("votes3").innerHTML = counter + " " + "Votes";
}