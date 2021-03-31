function submitForm(event) {
    event.preventDefault();
    const something = document.getElementById('favswitch').value;
    var hasNumber = /\d/;
    if (something === ""){
        document.getElementById("answer").innerHTML = "Please type a response";
    } else if (hasNumber.test(something)){
        document.getElementById("answer").innerHTML = something;
    }
}