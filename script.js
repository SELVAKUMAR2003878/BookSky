//select the add button
var plus=document.getElementById("plusb")

// select the popup
var popup=document.getElementById("popup")

//select the parent div
var pardiv=document.querySelector(".pardiv")

//select the return button
var retbutton=document.getElementById("return")

//select the view more button
var viewmore=document.getElementById("vmbtn")

//select the section
var section=document.getElementById("section")


//select the input box's
var book=document.getElementById("book")
var author=document.getElementById("author")
var content=document.getElementById("content")

//input value's saving variable 
let bookvalue=book.value
var authorvalue=author.value
var contentvalue=content.textContent


// popup show function
function show() {
    popup.style.display="block"
}

//save function
function save() {
    
    popup.style.display="none"
    var crediv = document.createElement("div")
    section.append(crediv)
    crediv.setAttribute("class","pardiv")
    valueinside(crediv)
    console.log(book.value)
    console.log(author.value)
    console.log(content.value)
}

//value insiding function
function valueinside(crediv) {
    var newh1= document.createElement("h1")
    var newh2=document.createElement("h2")
    var para=document.createElement("p")
    var btn1=document.createElement("button")

    //That is a new element view button
    btn1.setAttribute("class",".pardiv button" ,".pardiv button:hover")
    btn1.addEventListener("click" , function(){
        viewnew(event,crediv,btn1)
    })
    btn1.append("View More")

    //That is a new element delete button
    var delbtn=document.createElement("button")
    delbtn.setAttribute("class",".pardiv button" ,".pardiv button:hover")
    delbtn.addEventListener("click" , function(){
        this.parentElement.remove()
    })
    delbtn.append("Delete")
    
    crediv.append(newh1)
    crediv.append(newh2)
    crediv.append(para)
    crediv.append(btn1)
    crediv.append(delbtn)
    console.log(newh1)
    
    newh1.textContent=book.value
    newh2.textContent=author.value
    para.textContent=content.value


}

//view more function in creating elements
function viewnew(event,crediv,btn1){
    event.target.parentElement.style.width="100%"
    event.target.parentElement.style.height="80%"
    event.target.parentElement.style.position="absolute"
    event.target.parentElement.style.margin="0px";
    event.target.style.display="none"
    var btnret = document.createElement("button")
    btnret.setAttribute("class",".pardiv button" ,".pardiv button:hover")
    btnret.addEventListener("click" , function(){
        newret(event,btn1,btnret)
    })
    btnret.append("Return")
    crediv.append(btnret)
  
}

//view more function
function view() {
    pardiv.style.width="100%"
    pardiv.style.height="80%"
    pardiv.style.position="absolute"
    pardiv.style.margin="0px";
    retbutton.style.display="block"
    viewmore.style.display="none"
}
// return button function
function ret() {
    pardiv.style.width="400px"
    pardiv.style.height="300px"
    pardiv.style.position="static"
    pardiv.style.margin="20px";
    retbutton.style.display="none"
    viewmore.style.display="block"
    viewmore.style.marginLeft="46%"
    pardiv.style.marginTop="30px"
}

//return button in creating elements
function newret(event,btn1,btnret) {
    event.target.parentElement.style.width="400px"
    event.target.parentElement.style.height="300px"
    event.target.style.display="block"
    event.target.style.marginLeft="41.5%"
    btnret.style.display="none"
    event.target.parentElement.style.position="static"
    event.target.parentElement.style.marginTop="30px"
    event.target.parentElement.style.margin="20px"
}

//delete the element
function del(event) {
    event.target.parentElement.remove()
}
