function hideMe() {
    const hideElement = document.getElementById("more-info");
    if (hideElement.style.display === "none") {
        hideElement.style.display = "block";
    } else {
        hideElement.style.display = "none";
    }
}


function submitForm(event) {
    event.preventDefault();
    const userInput = document.getElementById('favswitch').value;
    var hasNumber = /\d/;
    if (userInput === ""){
        document.getElementById("wrong-answer").innerHTML = "Please type a response";
    } else if (hasNumber.test(userInput)){
        document.getElementById("wrong-answer").innerHTML = "Please don't include numbers in your response";
    } else {
        document.getElementById("answer").innerHTML = "Thanks for using my site I'm glad  " +userInput+ " is your favorite.";
    }
}

