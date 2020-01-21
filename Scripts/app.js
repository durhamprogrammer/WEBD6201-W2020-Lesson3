"use strict";






//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function
(function(){

    let h2;

    // event handlers
    function MouseOver()
    {
        h2.style.color = "green";
        h2.style.fontSize = "60px";
    }

    function MouseOut()
    {
        h2.style.color = "black";
        h2.style.fontSize = "32px";
    }

    function Start()
    {
        console.log("%cApp Started...", "color:blue; font-size:20px");
        
        // get a reference to the content area
        let contentArea = document.getElementById("contentArea");

        // create an h2 element
        h2 = document.createElement("h2");
        // add a class attribute to the h2 element
        h2.setAttribute("class", "display-6");
        h2.textContent = "a secondary header";

        // append the new node to the contentArea
        contentArea.appendChild(h2);

        h2.addEventListener("click", function(){
           h2.style.color = (h2.style.color == "blue") ? "black" : "blue";
        });

        h2.addEventListener("mouseover", MouseOver);
        h2.addEventListener("mouseout", MouseOut);

        // creating a new paragraph element
        let firstParagraph = document.createElement("p");
        // configuring the new element
        firstParagraph.textContent = "This is a very short paragraph!";

        // get a reference to the parentNode of the h2 element
        let parentDiv = h2.parentNode;
        
        // insert the new paragraph before the h2 element
        parentDiv.insertBefore(firstParagraph, h2);

        // get a reference to the first h1 tag
        let h1 = document.getElementsByTagName("h1")[0];

        // copy by value from one element to another
        let anotherParagraph = firstParagraph.cloneNode(true);

        // move the paragraph above the  h1
        h1.parentNode.insertBefore(anotherParagraph, h1);

        let ul = document.getElementsByTagName("ul")[0];

        /* for (const child of ul.children) {
            child.style.display = "none";
        } */

       // ul.children.children[ul.children.length -1].style.display = "none";

        ul.lastElementChild.style.fontWeight = "bold";
        ul.lastElementChild.lastElementChild.style.color = "blue";

        let tom = new Student("Tom", 30, "123456789a");
        tom.saysHello();
        tom.isStudying();
    }

    window.addEventListener("load", Start);
})();