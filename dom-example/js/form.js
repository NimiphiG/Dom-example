
const firstName = document.getElementById("first-name");
const secondName = document.getElementById("second-name");
const submitbutton = document.getElementById("submit");
console.log(submitbutton)
submitbutton.onclick = function () {
    if (firstName.value == "" || secondName.value == "") {
        console.log("try again silly")
    } else {
        console.log("nice")

    }
}
