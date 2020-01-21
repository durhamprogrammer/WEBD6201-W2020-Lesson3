"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let h2;
    let tom;

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        console.log("%cInitializing Variables", "color: blue;")
        h2 = document.createElement('h2');
        h2.textContent = "Heading 2";

        //attach properties to the app object
        app.h2 = h2;
        app.tom = "whatever";

        tom = new objects.Student("Tom", 40, "123456");
        tom.saysHello();
        tom.isStudying();

        

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
        console.log("%cMain Program Body", "color: green;")
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

