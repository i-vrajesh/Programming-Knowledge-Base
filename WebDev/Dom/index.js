document.getElementsByTagName("btn")[0]; //As mentioned getElements, it will gather all elements with tagname btn..need to mention index to get specific element
document.getElementsByClassName("li")[2]; //index 2 for 3rd element in the list
document.getElementById("title"); // title ID
document.querySelector("h1").innerHTML="Hello World" // Changing H1's innerHTML text to hellow world using querySelector
document.querySelectorAll("h1").innerHTML="Hello World" // Changes all H1 tags innerHTML text to hellow world using querySelector

document.querySelector("h1").innerHTML="<em>Hello</em>"// need to place tags also in between "", so that JS will consider <em> also 

document.querySelector("a").attributes; //will give all the list of attributes attached to HTML element
document.querySelector("a").getAttribute("href"); //will give the value given in particular attribute
document.querySelector("a").setAttribute("href","https://bing.com"); //will change old link to new given link ("attribute","new value")