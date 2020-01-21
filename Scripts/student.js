(function(objects){

    /**
     * This is the Student class 
     *
     * @class Student
     * @extends {objects.Person}
     */
    class Student extends objects.Person
    {

        /**
         * Creates an instance of Student.
         * @param {*} name
         * @param {*} age
         * @param {*} studentID
         * @memberof Student
         */
        constructor(name, age, studentID)
        {
            super(name, age);
            this.studentID = studentID;
        }
    
        isStudying()
        {
            console.log(`${this.name} with a studentID of ${this.studentID} is studying.`);
        }
    }

    objects.Student = Student;
})(objects || (objects = {}));


