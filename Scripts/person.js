let objects;
(function(objects){

    class Person
    {
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }
    
        saysHello()
        {
            console.log(`${this.name} says Hello!`);
        }
    }

    // attaches the class Person to the objects namespace
    objects.Person = Person;
})(objects || (objects = {}));
