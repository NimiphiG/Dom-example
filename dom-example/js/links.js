
console.log("hello")
const body = document.querySelector('body');
body.style.backgroundColor = "#daddad";
const links = document.querySelectorAll("a")
console.log(links.length);
for(let i =0; i< links.length; i++){
    // console.log(links[i])
    links[i].style.color = "#daddod"
}